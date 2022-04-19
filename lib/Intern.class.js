const Employee = require('./Employee.class');

module.exports = class Intern extends Employee {
  constructor(props) {
    super();
    this._email = props?.email || '';
    this._id = props?.id || '';
    this._name = props?.name || '';
    this._role = 'intern';
    this._school = props?.school || '';
  }

  get school() {
    return this._school;
  }

  set github(newSchool) {
    this._school = newSchool;
  }
};
