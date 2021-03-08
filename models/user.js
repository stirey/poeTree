
module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define('user', {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {notEmpty: true}
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {notEmpty: true}
        }
      
    })
    return User;
}
