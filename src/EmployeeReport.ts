interface Employee {
  name: string;
  age: number;
}

export type Employees = Employee[];

const isAdult = ({ age }: Employee): boolean => age >= 18;

const toName = (employee: Employee): string => employee.name;

const byName = ({ name: first }: Employee, { name: second }: Employee): number => first.localeCompare(second);

const capitalize = (name: string) => `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;

export const adults = (employees: Employees): string[] => employees.filter(isAdult).sort(byName).map(toName).map(capitalize);
