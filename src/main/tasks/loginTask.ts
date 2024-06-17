import { ipcMain } from 'electron'

export function registerImageTasks() {
  ipcMain.on('start-game', loginGame)
}

export async function loginGame() {
}
