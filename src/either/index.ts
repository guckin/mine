export type Either<E, T> = Left<E> | Right<T>;

export type Right<T> = {
    readonly _type: 'Right';
    readonly value: T;
};

export type Left<E> = {
    readonly _type: 'Left';
    readonly value: E;
};

export const isRight = <E, T>(value: Either<E, T>): value is Right<T> => value._type === 'Right';

export const isLeft = <E, T>(value: Either<E, T>): value is Left<E> => value._type === 'Left';

export const right = <E, T>(value: T): Either<E, T> => ({
    _type: 'Right',
    value
});

export const left = <E, T>(value: E): Either<E, T> => ({
    _type: 'Left',
    value
});

export type FlatMap = <E, A, B>(fn: UnaryFn<A, Either<E, B>>) => (either: Either<E, A>) => Either<E, B>

export const flatMap: FlatMap = (fn) => (either) => isRight(either) ? fn(either.value) : either;
