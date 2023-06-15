import * as directives from './directives'
import { App, Directive } from 'vue'

export const useDirectives = (app: App): void => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, (directives as { [key: string]: Directive })[key])
  })
}