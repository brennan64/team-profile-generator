const input = require('./src/input');
const output = require('./src/output');

(async () => {
  const users = {
    engineer: [],
    intern: [],
    manager: null,
  };

  console.log('--- Adding new Manager ---');
  users.manager = await input.getUser('manager');
  let userType = null;

  while (userType !== 'none') {
    userType = await input.getUserType();

    if (userType !== 'none') {
      console.log(`--- Adding new ${userType.toUpperCase()} ---`);
      const user = await input.getUser(userType);
      users[userType].push(user);
    }
  }

  const html = output.getFullHtml(users);
  await output.writeHtmlToFile(html);
})();
