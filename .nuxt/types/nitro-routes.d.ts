// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/test': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/test').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.6.2_@types+node@18.0.0_sass@1.63.6/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}