export function multiplicateArgs(...args: Array<number>): number {
    return args.reduce((accumulator, value) => accumulator * value, 1);
}

export function concatenateArgs(...args: string[]): string {
    return args.reduce((accumulator, value) => accumulator + value);
}

const result = multiplicateArgs(1, 2, 3, 4, 5);
const concatenate = concatenateArgs('a', 'b', 'c');

console.log(result);
console.log(concatenate);
