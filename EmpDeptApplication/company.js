"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company = /** @class */ (function () {
    function Company(employees) {
        this.employees = [];
        this.employees = employees;
    }
    Company.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getEmployeesByDepartment = function (department) {
        return this.employees.filter(function (employee) { return employee.department === department; });
    };
    Company.prototype.getTotalSalaryByDepartment = function (department) {
        return this.getEmployeesByDepartment(department).reduce(function (total, employee) { return total + employee.salary; }, 0);
    };
    return Company;
}());
exports.Company = Company;
