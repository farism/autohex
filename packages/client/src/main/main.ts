import * as chokidar from 'chokidar'
import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import contextMenu from 'electron-context-menu'

contextMenu({
  showInspectElement: true,
})

let win: BrowserWindow
;(async () => {
  await app.whenReady()

  win = new BrowserWindow({
    backgroundColor: '#fff',
    width: 1280,
    height: 768,
    title: `client${new Date().getTime()}`,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
    },
  })

  win.webContents.toggleDevTools()

  win.loadURL(
    `file://${path.resolve(process.cwd(), 'dist/renderer/index.html')}`
  )
})()

chokidar.watch(path.resolve('dist/renderer/**')).on('change', () => {
  if (win) {
    win.reload()
    win.show()
  }
})
