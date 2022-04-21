import { adults, Employees } from './EmployeeReport';

describe('Employee report', () => {
  it('Should list adults', () => {
    const employees: Employees = [
      { name: 'max', age: 17 },
      { name: 'SEPP', age: 18 },
      { name: 'nINA', age: 15 },
      { name: 'MiKe', age: 51 },
    ];

    expect(adults(employees)).toEqual(['Mike', 'Sepp']);
  });
});
