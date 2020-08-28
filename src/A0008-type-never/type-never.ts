export function createError(): never {
    throw new Error('there is an error');
}

console.log(createError());
