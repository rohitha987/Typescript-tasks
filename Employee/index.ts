//Create an employee object with fields like id, name, password. Keep id as unique and access all datatypes like string, boolean and mixed

interface Employee {
  id: number;
  name: string;
  password: string | number;
  isDeployed: boolean,
}

let newEmployee: Employee = {
  id: 1,
  name: "John Doe",
  password: "pass@word1",
  isDeployed: true,
};

console.log(newEmployee);