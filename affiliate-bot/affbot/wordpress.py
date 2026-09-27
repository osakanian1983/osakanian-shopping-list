"""WordPress REST API への下書き保存。公開は人が確認してから行う前提。"""

import requests


class WordPressError(Exception):
    pass


class WordPressClient:
    def __init__(self, base_url: str, user: str, app_password: str,
                 session: requests.Session | None = None):
        self.endpoint = f"{base_url}/wp-json/wp/v2/posts"
        self.auth = (user, app_password)
        self.session = session or requests.Session()

    def create_draft(self, title: str, content: str, slug: str, excerpt: str) -> dict:
        resp = self.session.post(
            self.endpoint,
            auth=self.auth,
            json={
                "title": title,
                "content": content,
                "slug": slug,
                "excerpt": excerpt,
                "status": "draft",
            },
            timeout=30,
        )
        if resp.status_code not in (200, 201):
            raise WordPressError(f"WordPress {resp.status_code}: {resp.text[:300]}")
        data = resp.json()
        return {"id": data.get("id"), "link": data.get("link")}
