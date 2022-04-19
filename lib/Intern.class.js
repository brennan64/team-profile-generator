const Employee = require('./Employee.class');

module.exports = class Intern extends Employee {
  constructor(props) {
    super();
    this._role = 'Intern';
    this._school = props?.school || '';
  }

  get school() {
    return this._school;
  }

  set github(newSchool) {
    this._school = newSchool;
  }
};
