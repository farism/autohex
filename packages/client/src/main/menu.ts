import { MenuItem, MenuItemConstructorOptions } from 'electron'

export const template: (MenuItemConstructorOptions | MenuItem)[] = [
  {
    label: 'Editor',
    submenu: [
      {
        label: 'About Editor',
      },
      {
        label: 'Check for Updates...',
      },
      {
        type: 'separator',
      },
      {
        label: 'Hide',
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit',
      },
    ],
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'New File',
        accelerator: 'CmdOrCtrl+N',
      },
      {
        label: 'New Window',
        accelerator: 'Shift+CmdOrCtrl+N',
      },
      {
        type: 'separator',
      },
      {
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
      },
      {
        label: 'Open Folder...',
        accelerator: 'Shift+CmdOrCtrl+O',
      },
      {
        label: 'Open Recent',

        submenu: [
          {
            label: '~/Documents/Projects/games/icepicker/foo.json',
          },
        ],
      },
      {
        type: 'separator',
      },
      {
        label: 'Save',
      },
      {
        label: 'Save As...',
      },
      {
        label: 'Save All',
      },
      {
        type: 'separator',
      },
      {
        label: 'Close Editor',
      },
      {
        label: 'Close Window',
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
      },
      {
        label: 'Redo',
        accelerator: 'CmdOrCtrl+Y',
      },
      {
        type: 'separator',
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
      },
      {
        type: 'separator',
      },
      {
        label: 'Find',
        accelerator: 'CmdOrCtrl+F',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Toggle Sidebar',
        accelerator: 'CmdOrCtrl+\\',
      },
      {
        label: 'Toggle Entities',
        accelerator: 'CmdOrCtrl+Y',
      },
      {
        label: 'Toggle Components',
        accelerator: 'CmdOrCtrl+Y',
      },
      {
        type: 'separator',
      },
      {
        label: 'Zoom In',
        accelerator: 'CmdOrCtrl+=',
      },
      {
        label: 'Zoom Out',
        accelerator: 'CmdOrCtrl+-',
      },
      {
        label: 'Reset Zoom',
        accelerator: 'CmdOrCtrl+0',
      },
    ],
  },
  {
    label: 'Scene',
    submenu: [
      {
        label: 'Add Entity',
      },
      {
        label: 'Remove Entity',
      },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Report Issue',
      },
      {
        label: 'Release Notes',
      },
      {
        label: 'View License',
      },
    ],
  },
]
