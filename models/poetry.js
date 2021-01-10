module.exports = function (sequelize, DataTypes) {

    const Poetry = sequelize.define('poetry', {

        question1: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        question2: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        question3: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        red: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        orange: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        yellow: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        green: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        blue: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        purple: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        black: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        gray: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        white: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        poemtitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lineone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linetwo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linethree: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER
        }
    })
    return Poetry;
}
