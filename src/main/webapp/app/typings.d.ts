declare const VERSION: string;
declare const SERVER_API_URL: string;
declare const DEVELOPMENT: string;

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@managementui/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@managementui/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}
