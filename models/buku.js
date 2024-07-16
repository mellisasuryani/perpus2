
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const buku = sequelize.define('buku' , {
    IDbuku: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
 },
 judul: {
    type: DataTypes.STRING,
    allowNull: false
 },
 pengarang: {
    type: DataTypes.STRING,
    allowNull: true
 },
 penerbit: {
    type: DataTypes.STRING,
    allowNull: true
 },
 isbn: {
    type: DataTypes.INTEGER,
    allowNull: false
 },
 tahunTerbit: {
    type: DataTypes.INTEGER,
    allowNull: false
 }
 
}, {
    timestamps: false

});

module.exports = buku;