// the type literal of "y" is "10", because you cannot change to another number for example
const y = 10;

// when you define person.name as a const you cannot change the name. The name receive a literal value/type
const person = {
    name: 'Kleber' as const,
    lastName: 'Vaz',
};

function chooseColor(color: 'Red' | 'Blue' | 'Yellow'): string {
    return color;
}

console.log(chooseColor('Yellow'));
