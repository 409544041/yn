import * as storage from '@fe/utils/storage'
import * as utils from '@fe/utils/index'
import { getPurchased, showPremium } from '@fe/others/premium'
import * as extension from '@fe/others/extension'
import * as ioc from '@fe/core/ioc'
import * as plugin from '@fe/core/plugin'
import * as hook from '@fe/core/hook'
import * as action from '@fe/core/action'
import * as command from '@fe/core/command'
import { useToast } from '@fe/support/ui/toast'
import { useModal } from '@fe/support/ui/modal'
import * as env from '@fe/support/env'
import store from '@fe/support/store'
import * as base from '@fe/services/base'
import * as api from '@fe/support/api'
import * as embed from '@fe/support/embed'
import * as args from '@fe/support/args'
import * as doc from '@fe/services/document'
import * as view from '@fe/services/view'
import * as tree from '@fe/services/tree'
import * as markdown from '@fe/services/markdown'
import * as statusBar from '@fe/services/status-bar'
import * as layout from '@fe/services/layout'
import * as editor from '@fe/services/editor'
import * as theme from '@fe/services/theme'
import * as setting from '@fe/services/setting'
import * as i18n from '@fe/services/i18n'
import * as controlCenter from '@fe/services/control-center'
import * as runner from '@fe/services/runner'
import * as lib from './lib'
import * as components from './components'

const ctx = Object.freeze({
  lib,
  components,
  ioc,
  base,
  api,
  args,
  store,
  action,
  doc,
  command,
  tree,
  markdown,
  statusBar,
  controlCenter,
  runner,
  layout,
  editor,
  view,
  theme,
  storage,
  embed,
  setting,
  i18n,
  env,
  utils,
  ui: { useToast, useModal },
  registerHook: hook.registerHook,
  removeHook: hook.removeHook,
  triggerHook: hook.triggerHook,
  showPremium: showPremium,
  getPremium: () => getPurchased(),
  showExtensionManager: extension.showManager,
  getExtensionLoadStatus: extension.getLoadStatus,
  getExtensionInitialized: extension.getInitialized,
  version: __APP_VERSION__,
})

Object.defineProperty(window, 'ctx', {
  configurable: false,
  writable: false,
  value: ctx,
})

export type Ctx = typeof ctx
export type Plugin = plugin.Plugin<Ctx>

export default ctx
