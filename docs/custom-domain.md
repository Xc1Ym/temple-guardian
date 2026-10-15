# 自定义域名部署

正式地址：<https://temple-guardian.xc1ym.com/>。

GitHub 仓库：`Xc1Ym/temple-guardian`，发布来源为 GitHub Actions。域名配置保存在仓库的 **Settings → Pages → Custom domain** 中，值为 `temple-guardian.xc1ym.com`。

Cloudflare 的 `xc1ym.com` 区域使用以下独立记录：

| 项目 | 值 |
| --- | --- |
| 类型 | CNAME |
| 名称 | temple-guardian |
| 完整域名 | temple-guardian.xc1ym.com |
| 目标 | xc1ym.github.io |
| 代理 | 仅 DNS |
| TTL | 自动 |

CNAME 目标使用 GitHub Pages 用户域名，不包含仓库名或 URL 路径。GitHub Pages 管理此站点的 HTTPS 证书；证书就绪后在 Pages 配置中启用 **Enforce HTTPS**。

工作流的 `actions/configure-pages` 从 Pages 配置读取 `base_path`。绑定自定义域名后按 `/` 构建，游戏数据、字体、图片、音频及脚本都从新域名根路径加载。域名配置变更后必须重新运行工作流；仅修改 DNS 不会重建网站。本工程的发布来源为自定义 Actions 工作流，不依靠仓库里的 `CNAME` 文件。

查询当前配置：

```sh
gh api repos/Xc1Ym/temple-guardian/pages
dig temple-guardian.xc1ym.com CNAME +short
curl -I https://temple-guardian.xc1ym.com/
```

更换域名后，浏览器本机数据使用新的来源作用域，旧域名中的设置、地图和成绩不会自动迁移。

官方依据：[GitHub Pages 自定义域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)、[HTTPS 与证书](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)。
