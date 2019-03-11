let employees = ["Harry", "Moe", "Benjamina"]

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = title;
    this.salary = salary;
    this.status = status;
}

printEmployeeForm = (newEmployee) => {
    console.log(newEmployee);
}

let employee1 = new Employee (
    "Harry",
    "HR consultant",
    55000,
)

let employee2 = new Employee (
    "Moe",
    "Secretary",
    40000,
)

let employee3 = new Employee (
    "Benjamina",
    "Salesperson",
    40000,
    "Part-Time"
)

printEmployeeForm(employee1);
printEmployeeForm(employee2);
printEmployeeForm(employee3);
