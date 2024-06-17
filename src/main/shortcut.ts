import { globalShortcut, app } from 'electron'

export function registerGlobalShortcut() {
  globalShortcut.register('CommandOrControl+Alt+Q', async () => {
    app.quit()
  })
}

export function unregisterGloableShortcut() {
  globalShortcut.unregisterAll()
}
