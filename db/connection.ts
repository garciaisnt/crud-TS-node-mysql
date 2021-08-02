import { Sequelize } from 'sequelize';



const db = new Sequelize('crudts', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: true
});

export default db;