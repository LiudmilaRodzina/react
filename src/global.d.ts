declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
