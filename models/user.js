let sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // ,
        // acorns: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // admin: {
        //     type: DataTypes.BOOLEAN,
        // }
    })
    return User;
}