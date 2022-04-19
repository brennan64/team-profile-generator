const Manager = require('../lib/Manager.class');

const TEST_EMAIL = 'john.doe@test.com';
const TEST_ID = '0';
const TEST_NAME = 'John Doe';
const TEST_OFFICE_NUMBER = '123';

const testManager = new Manager({
  email: TEST_EMAIL,
  id: TEST_ID,
  name: TEST_NAME,
  officeNumber: TEST_OFFICE_NUMBER,
});

test('create a new Manager() instance', () => {
  expect(testManager.email).toBe(TEST_EMAIL);
  expect(testManager.id).toBe(TEST_ID);
  expect(testManager.name).toBe(TEST_NAME);
  expect(testManager.officeNumber).toBe(TEST_OFFICE_NUMBER);
});
