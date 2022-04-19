const fs = require('fs');

module.exports = {
  getCardHtml: function (user) {
    let uniqueHtml = '';

    if (user.role === 'engineer') {
      uniqueHtml = `<div class="card-body-data">GitHub: ${user.github}</div>`;
    }

    if (user.role === 'intern') {
      uniqueHtml = `<div class="card-body-data">School: ${user.school}</div>`;
    }

    if (user.role === 'manager') {
      uniqueHtml = `<div class="card-body-data">Office Number: ${user.officeNumber}</div>`;
    }

    return `<div class="card">
			<div class="card-header">
				<div class="card-header-name">${user.name}</div>
				<div class="card-header-title">${user.role}</div>
			</div>
			<div class="card-body">
				<div class="card-body-wrapper">
					<div class="card-body-data">${user.id}</div>
					<div class="card-body-data">${user.email}</div>
					${uniqueHtml}
				</div>
			</div>
		</div>`;
  },

  getFullHtml: function (users) {
    return `<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Meet the Team</title>
					<link href="./reset.css" rel="stylesheet" />
					<link href="./style.css" rel="stylesheet" />
				</head>
				<body>
					<header>Your Team</header>
					<main>
						${this.getCardHtml(users.manager)}
						${[...users.engineer, ...users.intern].map((user) => this.getCardHtml(user)).join('')}
					</main>
				</body>
			</html>`;
  },

  writeHtmlToFile: async function (html) {
    await fs.writeFile('./dist/index.html', html, (err) => {
      if (err) {
        console.log('An error occurred while writing the file...');
        console.error(err);
        return;
      }

      console.log('File written successfully!');
    });
  },
};
