module.exports = function (sequelize, DataTypes) {

    const Emoji = sequelize.define('emoji', {

        heart: {
            type: DataTypes.BOOLEAN,
        } 
    })
    return Emoji;
}
