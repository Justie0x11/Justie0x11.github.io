# Justie — 学术个人主页 / Academic Homepage

纯静态 HTML/CSS/JS，无需构建，由 GitHub Pages 托管。右上角可切换语言：中文 / English / 日本語 / 한국어 / Español / Français。

## 修改内容

- 页面：`index.html`（首页：Hero + 关于我）、`research.html`、`publications.html`、`projects.html`、`education.html`，导航/页脚在每页重复，改导航需同步各页。
- 文案与翻译：全部在 `assets/i18n.js` 的 `I18N` 字典里（HTML 中用 `data-i18n="key"` 标记）。改文字直接改字典；加语言在 `LANGS` 里登记并给每个 key 补一项。切换逻辑在 `assets/site.js`。
- 导师：`assets/i18n.js` 中 `hero.advisor` 各语言后补姓名。
- 论文：`publications.html` 内有注释掉的模板，复制一份填好即可。
- 照片：把照片放到 `assets/`（如 `avatar.jpg`），并把 `index.html` 中 `assets/avatar.svg` 改成新文件名。
- 简历：放入 `assets/cv.pdf`，并取消 `index.html` 中 CV 链接的注释。
- 配色、字体：编辑 `assets/style.css` 顶部的 `:root` 变量。

## 部署

仓库 Settings → Pages → Build and deployment → Source 选 `Deploy from a branch`，Branch 选 `main` / `(root)`。
推送到 `main` 后约 1 分钟自动更新。
