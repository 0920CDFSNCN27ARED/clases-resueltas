const fs = require("fs");
const path = require("path");

function saveUsers(users) {
    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "../users.json"), usersJSON);
}

module.exports = saveUsers;
