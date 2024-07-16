const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const pengembalian = sequelize.define('pengembalian', {
    IDpengembalian: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },


    tanggalPengembalian: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     denda: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     total: {
        type: DataTypes.INTEGER,
        allowNull: false
     
     }
}, 

{
    timestamps: false

});
    


module.exports = pengembalian;