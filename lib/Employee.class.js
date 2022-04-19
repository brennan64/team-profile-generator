const { v4: uuidv4 } = require('uuid');

module.exports = class Employee {
  constructor(props) {
    this._email = props?.email || '';
    this._id = uuidv4();
    this._name = props?.name || '';
    this._role = 'Employee';
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get role() {
    return this._role;
  }
};
