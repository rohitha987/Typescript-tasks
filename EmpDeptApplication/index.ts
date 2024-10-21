import { Employee } from "./Employee";
import { Company } from "./company";

const employees: Employee[] = [
    { id: 1, name: 'John Doe', salary: 50000, department: 'IT' },
    { id: 2, name: 'Jane Smith', salary: 60000, department: 'HR' },
    { id: 3, name: 'Bob Johnson', salary: 55000, department: 'IT' },
    { id: 4, name: 'Alice Williams', salary: 65000, department: 'HR' },
    { id: 5, name: 'Tom Davis', salary: 70000, department: 'IT'}
];

const company = new Company(employees);

company.addEmployee({ id: 6, name: 'Emily Wilson', salary: 75000, department: 'IT' });
console.log(company.getEmployeesByDepartment("IT"));

console.log(company.getTotalSalaryByDepartment("HR"));