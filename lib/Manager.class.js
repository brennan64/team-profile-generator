const Employee = require('./Employee.class');

module.exports = class Manager extends Employee {
  constructor(props) {
    super();
    this._role = 'Manager';
    this._officeNumber = props?.officeNumber || '';
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(newOfficeNumber) {
    this._officeNumber = newOfficeNumber;
  }
};
