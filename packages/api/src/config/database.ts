import sqlz, { Sequelize } from 'sequelize';

const db = process.env.POSTGRES_DB || '';
const user = process.env.POSTGRES_USER || '';
const password = process.env.POSTGRES_PASSWORD || '';

const sequelize = new Sequelize(db, user, password, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
});

export default sequelize;
export { sqlz };
