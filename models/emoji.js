module.exports = function (sequelize, DataTypes) {

    const Emoji = sequelize.define('emoji', {

        heart: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        smile: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        sun: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER
        }
       
    })
    return Emoji;
}
