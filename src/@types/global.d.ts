/* eslint-disable @typescript-eslint/no-explicit-any */

declare const cy: any;
declare const Cypress: any;

declare global {
  namespace NodeJS {
    interface Global {
      document: Document
      window: Window
      navigator: Navigator
      ENVIRONMENT: string
    }
  }

  interface Window {
    jQuery?: any
    $?: any
    define?: any
  }

  const dataLayer: DataLayer | any;
}
