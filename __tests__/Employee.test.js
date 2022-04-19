const Employee = require('../lib/Employee.class');

const TEST_EMAIL = 'john.doe@test.com';
const TEST_ID = '0';
const TEST_NAME = 'John Doe';

const testEmployee = new Employee({
  email: TEST_EMAIL,
  id: TEST_ID,
  name: TEST_NAME,
});

test('create a new Employee() instance', () => {
  expect(testEmployee.email).toBe(TEST_EMAIL);
  expect(testEmployee.id).toBe(TEST_ID);
  expect(testEmployee.name).toBe(TEST_NAME);
});
