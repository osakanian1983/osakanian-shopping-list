"""公開前に人が確認すべき表現を洗い出す簡易チェック。

ここで何も見つからなくても規約・法令に適合しているとは限らない。
あくまで人のチェックの補助として使う。
"""

import re

# (表現, 理由)
NG_PATTERNS = [
    (r"最安", "最上級・断定表現(景品表示法の優良誤認リスク)"),
    (r"日本一|世界一|業界一|No\.?\s?1|ナンバーワン", "根拠のない最上級表現"),
    (r"業界初|史上初", "根拠のない最上級表現"),
    (r"絶対|必ず|100\s?[%％]|完全", "断定表現"),
    (r"痩せ|やせる|ダイエット効果|脂肪を燃", "健康食品の効果効能(薬機法・健康増進法リスク)"),
    (r"治る|治す|効く|効果がある|改善する|予防する", "効果効能の標ぼう(薬機法リスク)"),
    (r"実際に(食べ|使っ|飲ん|試し)|私も(食べ|使っ|飲ん)|愛用", "体験談の捏造の疑い"),
    (r"https?://", "生成本文にURLが含まれている"),
]


def check_text(text: str) -> list[dict]:
    plain = re.sub(r"<[^>]+>", "", text)
    findings = []
    for pattern, reason in NG_PATTERNS:
        for m in re.finditer(pattern, plain):
            start = max(0, m.start() - 20)
            findings.append({
                "match": m.group(0),
                "reason": reason,
                "context": plain[start:m.end() + 20],
            })
    return findings
