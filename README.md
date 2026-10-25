# 芥子环技术文档

独立的 [Fumadocs](https://fumadocs.dev/) 文档站，部署在 `https://rinspace.com/docs/`。本站与 Rinspace Web、书籍阅读器及 Control Plane 分别构建和发布。

## 写作

页面放在 [`content/docs/`](content/docs/) 中，使用普通 Markdown 语法编写 `.mdx` 文件。每页顶部写 `title` 和 `description`；新增页面时将文件名加入 [`meta.json`](content/docs/meta.json) 以确定侧边栏顺序。可直接使用 GitHub 网页编辑器提交 Pull Request。

本地预览：

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000/docs/`。提交前运行 `npm run typecheck`、`npm run build`。合并到 `main` 后，CI 自动构建固定发行，站点更新器验收通过后自动更新 `/docs`，通常在数分钟内完成。构建失败时保留线上旧版本。

## 边界

本仓库只维护技术文档站。用户的文章、书籍、标签内容不放在这里，也不由文档站渲染。

文档站基于 Fumadocs 官方静态 Next.js 模板建立；上游模板及依赖按 MIT 许可证使用，本站新增源码及文档按 [AGPL-3.0](LICENSE) 发布。
