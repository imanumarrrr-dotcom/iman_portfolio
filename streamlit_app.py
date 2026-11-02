"""Streamlit wrapper for the Iman Umar portfolio.

Streamlit can only run Python, so this file reads the static site (index.html, css, js, fonts, images)
from the repo, inlines everything into ONE html string and shows it full-screen.
Nothing needs to be rebuilt: edit the site as usual, push to GitHub, and Streamlit redeploys.
"""
import base64
import mimetypes
import re
from pathlib import Path

ROOT = Path(__file__).parent


def _data_uri(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    if path.suffix == ".woff2":
        mime = "font/woff2"
    if path.suffix == ".docx":
        mime = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def build_html() -> str:
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    # CSS with fonts embedded
    css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    css = re.sub(
        r"url\(\.\./assets/fonts/([^)]+)\)",
        lambda m: f"url({_data_uri(ROOT / 'assets' / 'fonts' / m.group(1))})",
        css,
    )
    html = html.replace('<link rel="stylesheet" href="css/style.css">', f"<style>{css}</style>")

    # tags that cannot work inside an embedded page
    html = re.sub(r'<link rel="preload"[^>]*>', "", html)
    html = re.sub(r'<link rel="manifest"[^>]*>', "", html)
    html = re.sub(r'<link rel="apple-touch-icon"[^>]*>', "", html)
    html = re.sub(r'<meta (property="og:image"|name="twitter:image")[^>]*>', "", html)
    html = html.replace('href="assets/favicon.svg"', f'href="{_data_uri(ROOT / "assets" / "favicon.svg")}"')

    # images + CV
    html = html.replace('src="assets/portrait.jpg"', f'src="{_data_uri(ROOT / "assets" / "portrait.jpg")}"')
    cv_uri = _data_uri(ROOT / "assets" / "Iman_Umar_CV.docx")
    html = html.replace('href="assets/Iman_Umar_CV.docx"', f'href="{cv_uri}"')

    # scripts (config first, then the bundle). "</script" inside a script would end it early.
    config = (ROOT / "site-config.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
    config += f"\nwindow.SITE_CONFIG.contact = window.SITE_CONFIG.contact || {{}}; window.SITE_CONFIG.contact.cv = '{cv_uri}';\n"
    app = (ROOT / "js" / "app.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
    html = html.replace('<script src="site-config.js"></script>', f"<script>{config}</script>")
    html = html.replace('<script src="js/app.js" defer></script>', f"<script>{app}</script>")
    return html


try:
    import streamlit as st
    import streamlit.components.v1 as components
except ImportError:  # lets build_html() be tested without Streamlit installed
    st = None

if st is not None:
    st.set_page_config(page_title="Iman Umar — Portfolio", page_icon="✨", layout="wide", initial_sidebar_state="collapsed")

    @st.cache_data(show_spinner="Loading portfolio…")
    def _page() -> str:
        return build_html()

    # remove Streamlit's own chrome and let the portfolio fill the whole window
    st.markdown(
        """
        <style>
          header, footer, #MainMenu, [data-testid="stToolbar"], [data-testid="stDecoration"], [data-testid="stStatusWidget"] {display:none !important;}
          .stApp, .main, section.main > div, [data-testid="stMain"], [data-testid="stAppViewContainer"] {padding:0 !important; margin:0 !important; background:#000 !important;}
          .block-container, [data-testid="stMainBlockContainer"] {padding:0 !important; max-width:100% !important;}
          [data-testid="stVerticalBlock"] {gap:0 !important;}
          iframe {position:fixed !important; inset:0 !important; width:100vw !important; height:100vh !important; border:0 !important; z-index:9999;}
        </style>
        """,
        unsafe_allow_html=True,
    )
    components.html(_page(), height=900, scrolling=True)
