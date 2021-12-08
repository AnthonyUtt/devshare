import db, { sqlz as Sequelize } from '../config/database';

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    hash: {
        type: Sequelize.STRING,
    },
    oauth_provider: {
        type: Sequelize.STRING,
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            const val = this.getDataValue('lname');
            return val ? `${val.substring(0, 1).toUpperCase()}.` : null;
        },
    },
    bio: {
        type: Sequelize.TEXT,
    },
    image: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
        },
    },
});

export default User;
