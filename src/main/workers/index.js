import { Worker } from 'worker_threads'
import path from 'path'

export default function registerWorkers() {
  // 读取配置文件
  const worker = new Worker(path.join(__dirname, './readConstantsWorker.js'))
  // worker.postMessage('accounts.json')
  worker.on('message', ({ content, type }) => {
    global.appContext[type] = content
  })
}
