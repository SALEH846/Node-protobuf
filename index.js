const fs = require("node:fs");

const employees = [
    {
        name: "Saleh",
        salary: 1000,
        id: 1001
    },
    {
        name: "Haseeb",
        salary: 9000,
        id: 1002
    },
    {
        name: "Hamza",
        salary: 5000,
        id: 1003
    },
];

fs.writeFileSync("jsondata.json", JSON.stringify(employees));