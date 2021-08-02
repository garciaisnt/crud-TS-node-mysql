"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('crudts', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: true
});
exports.default = db;
//# sourceMappingURL=connection.js.map