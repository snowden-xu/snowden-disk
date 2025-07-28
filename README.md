# Snowden Disk

基于 Electron + Vite + React 的桌面应用，使用 electron-vite 风格的目录结构。

## 目录结构

```
snowden-disk/
├── src/
│   ├── main/
│   │   └── index.ts          # 主进程入口
│   ├── preload/
│   │   └── index.ts          # 预加载脚本
│   └── renderer/
│       ├── index.html        # HTML 入口文件
│       └── src/
│           ├── main.ts       # 渲染进程入口
│           ├── app.tsx       # React 应用组件
│           └── index.css     # 样式文件
├── forge.config.ts           # Electron Forge 配置
├── vite.main.config.ts       # 主进程 Vite 配置
├── vite.preload.config.ts    # 预加载脚本 Vite 配置
├── vite.renderer.config.ts   # 渲染进程 Vite 配置
└── package.json
```

## 开发命令

```bash
# 启动开发服务器
npm run start

# 构建应用
npm run make

# 打包应用
npm run package
```

## 技术栈

- **Electron**: 桌面应用框架
- **Vite**: 构建工具
- **React**: 前端框架
- **TypeScript**: 类型支持
- **Electron Forge**: 应用脚手架和构建工具
