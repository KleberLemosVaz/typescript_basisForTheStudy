//the type "unknown" is more secure than "any" when you are not sure about the type to use.

let x: unknown;

x = 100;
x = 'Kleber';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
