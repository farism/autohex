import { ChildProcess, spawn } from 'child_process'
import webpack from 'webpack'
import { mainConfig, rendererConfig } from './config'
const formatMessages = require('webpack-format-messages')

let electronProcess: ChildProcess

const startElectronProcess = () => {
  if (electronProcess) {
    electronProcess.kill('SIGINT')
  }

  electronProcess = spawn('electron', ['.'], { stdio: 'inherit' })

  electronProcess.on('close', (code, signal) => {
    if (signal === null) {
      startElectronProcess()
    }
  })
}

const formatCompilerMessages = (id: string, compiler: webpack.Compiler) => {
  console.log(`(${id}) Compiling...\n`)

  compiler.hooks.invalid.tap('invalid', function() {
    console.log(`(${id}) Compiling...\n`)
  })

  compiler.hooks.done.tap('done', stats => {
    const messages = formatMessages(stats)

    if (!messages.errors.length && !messages.warnings.length) {
      console.log(`(${id}) Compiled successfully!\n`)
    }

    if (messages.errors.length) {
      console.log(`(${id}) Failed to compile:\n`)
      messages.errors.forEach((e: any) => console.error(e))
      return
    }

    if (messages.warnings.length) {
      console.warn(`(${id}) Compiled with warnings:\n`)
      messages.warnings.forEach((w: any) => console.warn(w))
    }
  })
}

const mainCompiler = webpack(mainConfig)

const rendererCompiler = webpack(rendererConfig)

formatCompilerMessages('Main', mainCompiler)

formatCompilerMessages('Renderer', rendererCompiler)

mainCompiler.watch({}, (err: any, stats: any) => startElectronProcess())

rendererCompiler.watch({}, (err: any, stats: any) => {})
