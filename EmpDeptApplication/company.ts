import { Employee } from "./Employee";

export class Company{
    employees: Employee[] = [];

    constructor(employees: Employee[]){
        this.employees = employees;
    }

    addEmployee(employee: Employee){
        this.employees.push(employee);
    }

    deleteEmployee(id: number){
        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    getEmployeesByDepartment(department: string): Employee[]{
        return this.employees.filter(employee => employee.department === department);
    }

    getTotalSalaryByDepartment(department: string): number{
        return this.getEmployeesByDepartment(department).reduce((total, employee) => total + employee.salary, 0);
    }
}
