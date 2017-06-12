const mysql = require("mysql");


const mySqlConfig = require("./mySQL-config.json");

//MySQL
module.exports = mysql.createPool(mySqlConfig);