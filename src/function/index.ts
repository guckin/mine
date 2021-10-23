type UnaryFn<A, B> = (input: A) => B;

type Compose2<A, B, C> = [UnaryFn<A, B>, UnaryFn<B, C>];
const compose2 = <A, B, C>(...[fn1, fn2]: Compose2<A, B, C>): UnaryFn<A, C> => (a: A) =>
    fn2(fn1(a));
type Compose3<A, B, C, D> = [UnaryFn<A, B>, ...Compose2<B, C, D>]
const compose3 = <A, B, C, D>(...[fn, ...rest]: Compose3<A, B, C, D>): UnaryFn<A, D> =>
    compose2(fn, compose2(...rest));
type Compose4<A, B, C, D, E> = [UnaryFn<A, B>, ...Compose3<B, C, D, E>];
const compose4 = <A, B, C, D, E>(...[fn, ...rest]: Compose4<A, B, C, D, E>): UnaryFn<A, E> =>
    compose2(fn, compose3(...rest));
type Compose5<A, B, C, D, E, F> = [UnaryFn<A, B>, ...Compose4<B, C, D, E, F>];
const compose5 = <A, B, C, D, E, F>(...[fn, ...rest]: Compose5<A, B, C, D, E, F>): UnaryFn<A, F> =>
    compose2(fn, compose4(...rest));
type Compose6<A, B, C, D, E, F, G> = [UnaryFn<A, B>, ...Compose5<B, C, D, E, F, G>];
const compose6 = <A, B, C, D, E, F, G>(...[fn, ...rest]: Compose6<A, B, C, D, E, F, G>): UnaryFn<A, G> =>
    compose2(fn, compose5(...rest));
