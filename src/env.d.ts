/// <reference types="vite/client" />

declare let luckysheet: any;
declare module 'luckyexcel';
declare module 'exportExcel';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
