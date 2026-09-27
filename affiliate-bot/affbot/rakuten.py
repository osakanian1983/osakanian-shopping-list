"""楽天市場商品検索APIクライアント。

2026年の仕様変更で applicationId に加えて accessKey が必須になり、
アプリに登録した「許可サイト」と一致する Referer / Origin ヘッダーが求められる。
"""

import time
from dataclasses import asdict, dataclass

import requests

from .config import Config


class RakutenError(Exception):
    pass


@dataclass
class Product:
    name: str
    price: int
    item_url: str
    affiliate_url: str
    image_url: str
    shop_name: str
    review_average: float
    review_count: int
    caption: str

    def to_prompt_dict(self, index: int) -> dict:
        """Claude に渡す情報。URL は渡さず、リンクはコード側で差し込む。"""
        d = asdict(self)
        for key in ("item_url", "affiliate_url", "image_url"):
            d.pop(key)
        d["caption"] = d["caption"][:500]
        d["index"] = index
        return d


def parse_items(data: dict) -> list[Product]:
    """formatVersion 1({"Item": {...}})と 2(フラット)の両方に対応する。"""
    products = []
    for raw in data.get("Items", []):
        item = raw.get("Item", raw)
        images = item.get("mediumImageUrls") or []
        first = images[0] if images else ""
        image_url = first.get("imageUrl", "") if isinstance(first, dict) else first
        products.append(
            Product(
                name=item.get("itemName", ""),
                price=int(item.get("itemPrice") or 0),
                item_url=item.get("itemUrl", ""),
                affiliate_url=item.get("affiliateUrl") or item.get("itemUrl", ""),
                image_url=image_url,
                shop_name=item.get("shopName", ""),
                review_average=float(item.get("reviewAverage") or 0),
                review_count=int(item.get("reviewCount") or 0),
                caption=item.get("itemCaption", ""),
            )
        )
    return products


class RakutenClient:
    def __init__(self, cfg: Config, session: requests.Session | None = None,
                 min_interval: float = 1.0):
        self.cfg = cfg
        self.session = session or requests.Session()
        self.min_interval = min_interval
        self._last_call = 0.0

    def search(self, keyword: str, hits: int = 5, sort: str = "-reviewCount") -> list[Product]:
        # 楽天APIは短時間の連続アクセスを制限するため、呼び出し間隔を空ける
        wait = self.min_interval - (time.monotonic() - self._last_call)
        if wait > 0:
            time.sleep(wait)
        params = {
            "applicationId": self.cfg.rakuten_app_id,
            "accessKey": self.cfg.rakuten_access_key,
            "affiliateId": self.cfg.rakuten_affiliate_id,
            "keyword": keyword,
            "hits": hits,
            "sort": sort,
            "availability": 1,
            "imageFlag": 1,
            "formatVersion": 2,
            "format": "json",
        }
        headers = {}
        if self.cfg.rakuten_referer:
            headers["Referer"] = self.cfg.rakuten_referer
            headers["Origin"] = self.cfg.rakuten_referer.rstrip("/")
        resp = self.session.get(self.cfg.rakuten_endpoint, params=params,
                                headers=headers, timeout=30)
        self._last_call = time.monotonic()
        if resp.status_code != 200:
            raise RakutenError(f"楽天API {resp.status_code}: {resp.text[:300]}")
        return parse_items(resp.json())
