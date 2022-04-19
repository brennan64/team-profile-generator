const Employee = require('../lib/Employee.class');

const TEST_EMAIL = 'john.doe@test.com';
const TEST_NAME = 'John Doe';

const testEmployeeNoParams = new Employee();

const testEmployeeWithParams = new Employee({ email: TEST_EMAIL, name: TEST_NAME });
