import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Projects/smartplaybook/node_modules/.pnpm/nuxt@3.6.2_@types+node@18.0.0_sass@1.63.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}