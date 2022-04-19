const inquirer = require('inquirer');
const prompts = require('./prompts');
const Engineer = require('../lib/Engineer.class');
const Intern = require('../lib/Intern.class');
const Manager = require('../lib/Manager.class');
const Employee = require('../lib/Employee.class');

module.exports = {
  getUserType: async function () {
    const answers = await inquirer.prompt(prompts.chooseType);
    return answers.type;
  },

  getUser: async function (currentType) {
    const answers = await inquirer.prompt([...prompts.common, ...prompts[currentType]]);
    if (currentType === 'engineer') return new Engineer(answers);
    if (currentType === 'manager') return new Manager(answers);
    if (currentType === 'intern') return new Intern(answers);
    return new Employee(answers);
  },
};
