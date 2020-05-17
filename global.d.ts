export {};

declare global {
  interface IObjectLiteral {
    [key: string]: string;
  }

  interface IObjectLiteral2 {
    [key: string]: any;
  }
}
