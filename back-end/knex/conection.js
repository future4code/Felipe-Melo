"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var connection = (0, knex_1["default"])({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "2147328-felipe-melo",
        password: "5!!KTqaBazJvNPTwRkYC",
        database: "lovelace-2147328-felipe-melo",
        multipleStatements: true
    }
});
exports["default"] = connection;
