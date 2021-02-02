
module.exports = function (sequelize, DataTypes) {

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
        acorns: { 
            type: DataTypes.INTEGER,
            defaultValue: 0

        }
    })
    return User;
}
