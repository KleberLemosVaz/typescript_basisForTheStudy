type HasName = { name: string };
type HasLastName = { lastname: string };
type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

const newPerson: Person = {
    name: 'Kleber',
    lastname: 'Vaz',
    age: 30,
};

console.log(newPerson);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const intersection: Intersection = 'A';

console.log(intersection);
