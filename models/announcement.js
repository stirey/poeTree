module.exports = function (sequelize, DataTypes) {

    const Announcement = sequelize.define('announcement', {

       teacherName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       homework: {
           type: DataTypes.STRING,
           allowNull: false
       }
    })
    return Announcement;
}