import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', 'dasuki97', {
    host:'localhost',
    dialect: 'mysql'
})

export default db