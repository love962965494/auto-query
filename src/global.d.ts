
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare global {
  var appContext: {
    
  }
}

export {}