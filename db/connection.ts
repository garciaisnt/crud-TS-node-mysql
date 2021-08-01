import { Sequelize } from 'sequelize';



const db = new Sequelize('crudts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});

export default db;