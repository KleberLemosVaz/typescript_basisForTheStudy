export class Company {
    /*public*/ readonly name: string;
    protected readonly employees: Employee[] = [];
    private readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    showAllEmployees(): void {
        for (const employee of this.employees){
            console.log(employee);
        }
    }
}

export class Udemy extends Company {
    constructor(){
        super('Udemy', '01-234-567/0008-01');
    }

    popEmployee(): Employee | null {
        const employees = this.employees.pop();
        if (employees) return employees;
        return null;
    }
}

export class Employee {
    constructor(public readonly name: string, public readonly lastname: string) {}
}

const enterprise = new Company('MyCompany', '01-234-567/0008-01');
const enterprise2 = new Udemy();

const employee1 = new Employee('Kleber', 'Vaz');
const employee2 = new Employee('Luna', 'Vaz');
const employee3 = new Employee('Lucas', 'Vaz');

enterprise2.addEmployee(employee1);
enterprise2.addEmployee(employee2);
enterprise2.addEmployee(employee3);

const removedEmployee = enterprise2.popEmployee();
console.log(removedEmployee);

console.log(enterprise);
console.log(enterprise2);

enterprise.showAllEmployees();
