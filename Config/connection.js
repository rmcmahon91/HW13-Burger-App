var inquirer = require("inquirer")
var mysql = require("mysql")
require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NYR@ngers91",
    database: "burgers_db"
})

connection.connect(function (err) {
    if (err) throw err
    console.log("connect as id" + connection.threadId);
});

module.exports = connection