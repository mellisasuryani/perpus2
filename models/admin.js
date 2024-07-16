const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const admin = sequelize.define('admin', {
    IDadmin: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
 },
 nama: {
    type: DataTypes.STRING,
    allowNull: false
 },
 alamat: {
    type: DataTypes.STRING,
    allowNull: false
 }
}, {
    timestamps: false

});

module.exports = admin;