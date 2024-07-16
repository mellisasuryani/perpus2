const { DataTypes } = require ('sequelize');
const sequelize = require ('./index');

const Anggota = sequelize.define ('anggota', {
   IDanggota: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   nama: {
    type: DataTypes.STRING,
    allowNull: true
 },
 
 noHP: {
    type: DataTypes.INTEGER,
    allowNull: false
 }
 }, {
    timestamps: false
 
 });
 
    module.exports = Anggota;
 