const Employee = require('./Employee.class');

module.exports = class Manager extends Employee {
  constructor(props) {
    super();
    this._email = props?.email || '';
    this._id = props?.id || '';
    this._name = props?.name || '';
    this._role = 'manager';
    this._officeNumber = props?.officeNumber || '';
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(newOfficeNumber) {
    this._officeNumber = newOfficeNumber;
  }
};
