const Intern = require('../lib/Intern.class');

const TEST_EMAIL = 'john.doe@test.com';
const TEST_ID = '0';
const TEST_NAME = 'John Doe';
const TEST_SCHOOL = 'U of M Coding Bootcamp';

const testIntern = new Intern({
  email: TEST_EMAIL,
  id: TEST_ID,
  name: TEST_NAME,
  school: TEST_SCHOOL,
});

test('create a new Intern() instance', () => {
  expect(testIntern.email).toBe(TEST_EMAIL);
  expect(testIntern.id).toBe(TEST_ID);
  expect(testIntern.name).toBe(TEST_NAME);
  expect(testIntern.school).toBe(TEST_SCHOOL);
});
