const Employee = require('./Employee.class');

module.exports = class Engineer extends Employee {
  constructor(props) {
    super();
    this._email = props?.email || '';
    this._id = props?.id || '';
    this._name = props?.name || '';
    this._role = 'engineer';
    this._github = props?.github || '';
  }

  get github() {
    return this._github;
  }

  set github(newGithub) {
    this._github = newGithub;
  }
};
