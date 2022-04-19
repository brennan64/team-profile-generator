module.exports = class Employee {
  constructor(props) {
    this._email = props?.email || '';
    this._id = props?.id || '';
    this._name = props?.name || '';
    this._role = 'employee';
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
