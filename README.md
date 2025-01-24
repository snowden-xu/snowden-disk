# Snowden Disk

一个基于 Electron + React + TypeScript + Vite 构建的现代桌面应用。

## 技术栈

- Electron 34.0.1
- React 18.3.1
- TypeScript 4.5.4
- Vite 5.0.12
- Ant Design 5.23.2

## 开发环境要求

- Node.js (推荐使用最新的 LTS 版本)
- yarn 或 npm 包管理器

## 快速开始

1. 克隆项目

```bash
git clone [项目地址]
cd snowden-disk
```

2. 安装依赖

```bash
yarn
# 或
npm install
```

3. 启动开发服务器

```bash
yarn start
# 或
npm start
```

## 项目结构

```
src/
├── main/          # Electron 主进程代码
├── preload/       # 预加载脚本
└── renderer/      # 渲染进程代码（React 应用）
```

## 构建

- 打包应用：

```bash
yarn package
# 或
npm run package
```

- 制作安装包：

```bash
yarn make
# 或
npm run make
```

## 特性

- 使用 Vite 作为构建工具，提供快速的开发体验
- 集成 Electron Forge 进行应用打包和分发
- 使用 TypeScript 提供类型安全
- 集成 Ant Design 组件库
- 支持热重载开发

## 配置说明

- `forge.config.ts`: Electron Forge 配置
- `vite.*.config.ts`: Vite 构建配置
- `tsconfig.json`: TypeScript 配置

## 开发指南

### 主进程开发

主进程代码位于 `src/main` 目录，负责处理应用的生命周期、创建窗口等。

### 渲染进程开发

渲染进程代码位于 `src/renderer` 目录，这是一个标准的 React 应用。

### 预加载脚本

预加载脚本位于 `src/preload` 目录，用于在渲染进程中安全地暴露主进程功能。

## 许可证

MIT
