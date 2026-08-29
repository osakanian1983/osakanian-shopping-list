"""
KDPの検証は「Helvetica等の標準14フォントが埋め込まれていない」ことを警告する。
Helveticaと字幅がほぼ互換な Liberation Sans (TTF) を埋め込みフォントとして
登録し、全ページのテキストをこちらに差し替える。
"""
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

_FONT_DIR = "/usr/share/fonts/truetype/liberation/"

FONT_REGULAR = "LiberationSans"
FONT_BOLD = "LiberationSans-Bold"
FONT_ITALIC = "LiberationSans-Italic"
FONT_BOLD_ITALIC = "LiberationSans-BoldItalic"

_registered = False


def register():
    global _registered
    if _registered:
        return
    pdfmetrics.registerFont(TTFont(FONT_REGULAR, _FONT_DIR + "LiberationSans-Regular.ttf"))
    pdfmetrics.registerFont(TTFont(FONT_BOLD, _FONT_DIR + "LiberationSans-Bold.ttf"))
    pdfmetrics.registerFont(TTFont(FONT_ITALIC, _FONT_DIR + "LiberationSans-Italic.ttf"))
    pdfmetrics.registerFont(TTFont(FONT_BOLD_ITALIC, _FONT_DIR + "LiberationSans-BoldItalic.ttf"))
    pdfmetrics.registerFontFamily(
        FONT_REGULAR,
        normal=FONT_REGULAR,
        bold=FONT_BOLD,
        italic=FONT_ITALIC,
        boldItalic=FONT_BOLD_ITALIC,
    )
    _registered = True
