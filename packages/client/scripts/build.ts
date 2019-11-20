import webpack from 'webpack'
import { mainConfig, rendererConfig } from './config'

webpack(mainConfig, (err: any, stats: any) => {
  console.log('main compiled')
})

webpack(rendererConfig, (err: any, stats: any) => {
  console.log('renderer compiled')
})

export default {}
