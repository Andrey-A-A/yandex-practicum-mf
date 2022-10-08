declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {};

//declare module "*.png";
declare module "*.svg";
// declare module "*.png" {
//   const value: string;
//   export default value;
// }
declare module "*.png" {
  const value: any;
  export = value;
}