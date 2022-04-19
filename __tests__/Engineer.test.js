const Engineer = require('../lib/Engineer.class');

const TEST_EMAIL = 'john.doe@test.com';
const TEST_ID = '0';
const TEST_NAME = 'John Doe';
const TEST_GITHUB = 'https://github.com/brennan64';

const testEngineer = new Engineer({
  email: TEST_EMAIL,
  id: TEST_ID,
  name: TEST_NAME,
  github: TEST_GITHUB,
});

test('create a new Engineer() instance', () => {
  expect(testEngineer.email).toBe(TEST_EMAIL);
  expect(testEngineer.id).toBe(TEST_ID);
  expect(testEngineer.name).toBe(TEST_NAME);
  expect(testEngineer.github).toBe(TEST_GITHUB);
});
