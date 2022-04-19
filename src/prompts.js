module.exports = {
  common: [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee id:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email:',
    },
  ],
  manager: [
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter office number:',
    },
  ],
  engineer: [
    {
      type: 'input',
      name: 'github',
      message: 'Please enter employee github url:',
    },
  ],
  intern: [
    {
      type: 'input',
      name: 'school',
      message: 'Please enter employee school:',
    },
  ],
  chooseType: [
    {
      type: 'list',
      name: 'type',
      message: 'What type of user would you like to add?',
      choices: ['engineer', 'intern', 'none'],
    },
  ],
};
