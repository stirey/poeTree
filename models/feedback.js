module.exports = function (sequelize, DataTypes) {

    const Feedback = sequelize.define('feedback', {

       teacherName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       feedback: {
           type: DataTypes.STRING,
           allowNull: false
       }
    })
    return Feedback;
}
