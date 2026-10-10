# Justie — 学术个人主页 / Academic Homepage

纯静态 HTML/CSS/JS，无需构建，由 GitHub Pages 托管。右上角可切换 中 / EN。

## 修改内容

- 文字、链接：直接编辑 `index.html`。中英文内容分别写在 `<span class="zh">` 与 `<span class="en">` 中。
- 导师：搜索 `advisor`，在对应 span 中填写。
- 论文：`#publications` 区块内有注释掉的模板，复制一份填好即可。
- 照片：把照片放到 `assets/`（如 `avatar.jpg`），并把 `index.html` 中 `assets/avatar.svg` 改成新文件名。
- 简历：放入 `assets/cv.pdf`，并取消 `index.html` 中 CV 链接的注释。
- 配色、字体：编辑 `assets/style.css` 顶部的 `:root` 变量。

## 部署

仓库 Settings → Pages → Build and deployment → Source 选 `Deploy from a branch`，Branch 选 `main` / `(root)`。
推送到 `main` 后约 1 分钟自动更新。
