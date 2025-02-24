import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

// 创建主窗口
function createWindow(): void {
  const mainWindow = new BrowserWindow({
    // 窗口大小
    width: 900,
    // 窗口高度
    height: 670,
    // 窗口是否显示
    show: false,
    // 是否隐藏菜单栏
    autoHideMenuBar: true,
    // 窗口图标
    ...(process.platform === 'linux' ? { icon } : {}),
    // 窗口预加载
    webPreferences: {
      // 预加载脚本
      preload: join(__dirname, '../preload/index.js'),
      // 沙盒
      sandbox: false
    }
  })

  // 窗口准备显示
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  // 窗口打开链接
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // 开发环境加载远程 URL，生产环境加载本地 html 文件
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// 当 Electron 完成初始化并准备好创建浏览器窗口时，此方法将被调用。
// 某些 API 只能在事件发生后使用。
app.whenReady().then(() => {
  // 设置应用用户模型 ID
  electronApp.setAppUserModelId('com.electron')

  // 开发环境默认打开或关闭 DevTools 快捷键 F12，生产环境忽略 CommandOrControl + R
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC 测试
  ipcMain.on('ping', () => console.log('pong'))

  // 创建主窗口
  createWindow()

  app.on('activate', function () {
    // 在 macOS 中，当点击 dock 图标并且没有其他窗口打开时，通常会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 当所有窗口关闭时退出，除了 macOS。在那里，应用程序和它们的菜单栏通常会保持活动状态，直到用户明确使用 Cmd + Q 退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 在此文件中，您可以包含应用程序的特定主进程代码。您也可以将它们放在单独的文件中并在此处 require 它们。
