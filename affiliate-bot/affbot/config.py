"""環境変数から設定を読み込む。"""

import os
from dataclasses import dataclass

RAKUTEN_DEFAULT_ENDPOINT = (
    "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701"
)


class ConfigError(Exception):
    pass


@dataclass(frozen=True)
class Config:
    rakuten_app_id: str
    rakuten_access_key: str
    rakuten_affiliate_id: str
    rakuten_endpoint: str
    rakuten_referer: str
    claude_model: str
    claude_effort: str
    wp_url: str
    wp_user: str
    wp_app_password: str


def _load_dotenv(path: str = ".env") -> None:
    """依存を増やさないための最小限の .env ローダー(既存の環境変数は上書きしない)。"""
    if not os.path.exists(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def load_config(require_wordpress: bool = True) -> Config:
    _load_dotenv()
    env = os.environ.get
    cfg = Config(
        rakuten_app_id=env("RAKUTEN_APP_ID", ""),
        rakuten_access_key=env("RAKUTEN_ACCESS_KEY", ""),
        rakuten_affiliate_id=env("RAKUTEN_AFFILIATE_ID", ""),
        rakuten_endpoint=env("RAKUTEN_ENDPOINT", RAKUTEN_DEFAULT_ENDPOINT),
        rakuten_referer=env("RAKUTEN_REFERER", ""),
        claude_model=env("CLAUDE_MODEL", "claude-opus-5"),
        claude_effort=env("CLAUDE_EFFORT", "medium"),
        wp_url=env("WP_URL", "").rstrip("/"),
        wp_user=env("WP_USER", ""),
        wp_app_password=env("WP_APP_PASSWORD", ""),
    )
    required = ["RAKUTEN_APP_ID", "RAKUTEN_ACCESS_KEY", "RAKUTEN_AFFILIATE_ID"]
    if require_wordpress:
        required += ["WP_URL", "WP_USER", "WP_APP_PASSWORD"]
    missing = [name for name in required if not env(name)]
    if missing:
        raise ConfigError("未設定の環境変数: " + ", ".join(missing))
    return cfg
