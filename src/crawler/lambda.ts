export type Greeting = `Hello ${string}`;

export const  createLambda = () => () => Promise.resolve('hello world');
