const Schema = require("./employees_pb");
const fs = require("node:fs");

const saleh = new Schema.Employee();
saleh.setId(1001);
saleh.setName("Saleh");
saleh.setSalary(1000);

const haseeb = new Schema.Employee();
haseeb.setId(1002);
haseeb.setName("Haseeb");
haseeb.setSalary(9000);

const hamza = new Schema.Employee();
hamza.setId(1003);
hamza.setName("Hamza");
hamza.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(saleh);
employees.addEmployees(haseeb);
employees.addEmployees(hamza);

const bytes = employees.serializeBinary();
console.log("Binary", bytes);

fs.writeFileSync("binarydata", bytes);

const bytesRead = fs.readFileSync("binarydata");
const employees2 = new Schema.Employees.deserializeBinary(bytesRead);
console.log(employees2.toString());