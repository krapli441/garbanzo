declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}
