const { faker } = require('@faker-js/faker');
const fs = require('fs');

function createRandomUser(jobType) {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let phone = faker.phone.number('###-###-###');
  let role = jobType || faker.name.jobType();
  let loc = faker.address.cityName();
  let salary = faker.finance.amount(50000, 150000, 0, '$');
  let username = faker.internet.userName(firstName + lastName);
  let password = faker.internet.password();
  let direct_reports = [];

  return {
    _id: faker.datatype.uuid(),
    first_name: firstName,
    last_name: lastName,
    phone_number: phone,
    job_role: role,
    work_location: loc,
    salary: salary,
    username: username,
    password: password,
    direct_reports: direct_reports
  };
}

function generateEmployees() {
  let employees = [];
  let random = {};
  let employee = {};

  // regular employees
  for (let id = 1; id <= 20; id++) {
    random = createRandomUser();
    employee._id = random._id;
    employee.first_name = random.first_name;
    employee.last_name = random.last_name;
    employee.phone_number = random.phone_number;
    employee.job_role = random.job_role;
    employee.work_location = random.work_location;
    employee.salary = random.salary;

    employees.push(employee);
  }

  // HR employees
  for (let id = 1; id <= 5; id++) {
    random = createRandomUser("HR");
    employee._id = random._id;
    employee.first_name = random.first_name;
    employee.last_name = random.last_name;
    employee.phone_number = random.phone_number;
    employee.job_role = random.job_role;
    employee.work_location = random.work_location;
    employee.salary = random.salary;

    employees.push(employee);
  }

  return employees;
}

function generateData() {
  const employees = generateEmployees();
  let credentials = [];
  let direct_reports = [];

  let credential = {};
  let direct_report = {};



  return { employees: employees };
}

function generateJSON() {

  let dataObj = generateData();
  fs.writeFileSync('./data/employees.json', JSON.stringify(dataObj.employees, null, '\t'));
}

exports.generateJSON = generateJSON;
