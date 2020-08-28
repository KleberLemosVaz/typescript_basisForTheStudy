type Age = number;
type Person = {
    name: string;
    age: Age;
    salary: number;
    preferredColor?: PreferredColor;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type PreferredColor = ColorRGB | ColorCMYK;

const newPerson: Person = {
    name: 'Kleber',
    age: 30,
    salary: 10000,
};

export function setPreferredColor(person: Person, color: PreferredColor): Person {
    return { ...person, preferredColor: color };
}

console.log(setPreferredColor(newPerson, 'Cyan'));
