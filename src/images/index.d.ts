declare module '*.png' { // allows images to be imported as modules with a values attribute
    const value: string;
    export = value;
}