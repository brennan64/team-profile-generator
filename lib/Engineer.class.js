const Employee = require('./Employee.class');

module.exports = class Engineer extends Employee {
  constructor(props) {
    super();
    this._role = 'Engineer';
    this._github = props?.github || '';
  }

  get github() {
    return this._github;
  }

  set github(newGithub) {
    this._github = newGithub;
  }
};
