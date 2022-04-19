const inquirer = require("inquirer");
const Manager = require("./lib/Manager.class.js");
const Engineer = require("./lib/Manager.class");
const Intern = require("./lib/Intern.class");

const types = {
  MANAGER: "MANAGER",
  ENGINEER: "ENGINEER",
  INTERN: "INTERN",
};

const users = {
  manager: null,
  interns: [],
  engineers: [],
};

const addManager = () => {
  inquirer
    .prompt([
      {
        tpye: "input",
        name: "name",
        message: "Please Enter the Name of your Manager!",
      },
      {
        type: "input",
        name: "id",
        message: "Please Enter Managers Employee ID!",
      },
      {
        type: "input",
        name: "email",
        message: "Please Enter Managers Email!",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please Enter Managers Office Number!",
      },
    ])
    .then(({ email, id, name, officeNumber }) => {
      users.manager = new Manager({ email, id, name, officeNumber });
      console.log(users.manager);
    });
};

const addUser = () => {
  const thisUser = {
    type: "",
  };

  inquirer
    .prompt({
      type: "list",
      name: "type",
      message: "What type of user would you like to add?",
      choices: ["Engineer", "Intern"],
    })
    .then(({ type }) => {
      thisUser.type = type;
    });

  if (thisUser.type === "Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: "Please Enter Engineers Name!",
        },
        {
          type: "input",
          name: "engID",
          message: "Please Enter Engineers ID!",
        },
        {
          type: "input",
          name: "engEmail",
          message: "Please Enter Engineers Email!",
        },
        {
          type: "input",
          name: "engGit",
          message: "Please Enter Engineers Github Username!",
        },
      ])
      .then(
        ({ engName, engID, engEmail, engGit }) =>
          (users.engineers = new Engineer({ engName, engID, engEmail, engGit }))
      );
  }

  if (thisUser.type === "Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "intName",
          message: "Please Enter Interns Name!",
        },
        {
          type: "input",
          name: "intID",
          message: "Please Enter Interns ID!",
        },
        {
          type: "input",
          name: "intEmail",
          message: "Please Enter Interns Email!",
        },
        {
          type: "input",
          name: "intSchool",
          message: "Please Enter Interns School!",
        },
      ])
      .then(
        ({ intName, intID, intEmail, intSchool }) =>
          (users.interns = new Intern({ intName, intID, intEmail, intSchool }))
      );
  }
  addChoice();
};

const addChoice = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What type of user would you like to add?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(console.log("choice added"));
};

let isComplete = false;

// Add 1 manager
//  (name, employee ID, email address, and office number)
addManager();

// while (!isComplete) {
//   addUser();
//   console.log("is complete is true");
// }

// Show reusable menu that the user can decide to add eiter an intern or an engineer
// ENGINEER: name, ID, email, and GitHub username
// INTERN: name, ID, email, and school
// After all answers are gathered, store the generated user in some other var higher up in scope and show the Engineer/Intern menu again
// If the user does not choose to add another Engineer or Intern, exit and generate the HTML
