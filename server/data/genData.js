const { faker } = require('@faker-js/faker');
const fs = require('fs');
let global_id = 0;

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
  let manager = "";
  let id = faker.datatype.uuid();
  let emp_id = ++global_id;

  return {
    _id: id,
    emp_id: emp_id,
    first_name: firstName,
    last_name: lastName,
    phone_number: phone,
    job_role: role,
    work_location: loc,
    salary: salary,
    username: username,
    password: password,
    direct_reports: direct_reports,
    manager: manager
  };
}

function generateRaw() {
  let raw = []

  // regular employees
  for (let i = 0; i < 20; i++) {
    let random = createRandomUser();
    raw.push(random);
  }

  // HR employees
  for (let i = 0; i < 5; i++) {
    let random = createRandomUser("HR");
    raw.push(random);
  }

  for (let i = 0; i < 5; i++) {
    let random = createRandomUser("Manager");
    raw.push(random);
  }

  // add managers and direct reports
  for (let i = 0; i < 25; i++) {
    let random = raw[i];
    let num = Math.floor(Math.random() * 5) + 25;
    let manager = raw[num];
    random.manager = manager.emp_id;
    manager.direct_reports.push(random.emp_id);
  }

  return raw;

}

function generateEmployees(raw) {
  let employees = [];

  for (let i = 0; i < raw.length; i++) {
    let random = raw[i]
    let employee = {};
    employee._id = random._id;
    employee.emp_id = random.emp_id;
    employee.first_name = random.first_name;
    employee.last_name = random.last_name;
    employee.phone_number = random.phone_number;
    employee.job_role = random.job_role;
    employee.work_location = random.work_location;
    employee.salary = random.salary;
    employee.manager = random.manager;
    employee.direct_reports = random.direct_reports;

    employees.push(employee);
  }

  return employees;
}

function generateCredentials(raw) {
  let credentials = [];

  for (let i = 0; i < raw.length; i++) {
    let raw_data = raw[i];
    let credential = {};

    credential._id = raw_data._id;
    credential.emp_id = raw_data.emp_id;
    credential.username = raw_data.username;
    credential.password = raw_data.password;

    credentials.push(credential);
  }

  return credentials;
}

function generateData() {
  const raw = generateRaw();
  const employees = generateEmployees(raw);
  const credentials = generateCredentials(raw);


  return { employees: employees, credentials: credentials};
}

function generateJSON() {

  let dataObj = generateData();
  fs.writeFileSync('./data/employees.json', JSON.stringify(dataObj.employees, null, '\t'));
  fs.writeFileSync('./data/credentials.json', JSON.stringify(dataObj.credentials, null, '\t'));
}

exports.generateJSON = generateJSON;
