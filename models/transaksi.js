const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Anggota = require ('./anggota');
const buku = require('./buku');
const pengembalian = require('./pengembalian');

const transaksi = sequelize.define ('transaksi', {
    IDtransaksi: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
 },
    tanggalPeminjaman: {
        type: DataTypes.INTEGER,
        allowNull: true
 },
 IDanggota: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references:{
       model: Anggota,
       key: 'IDanggota'
   }
},

IDbuku: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
       model: buku,
       key: 'IDbuku'
   
   }
},

IDpengembalian: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references:{
    model: pengembalian,
    key: 'IDpengembalian'
    }
},

},

{
    timestamps: false
});

transaksi.belongsTo(Anggota, { foreignKey: 'IDanggota' });
Anggota.belongsTo(transaksi, { foreignKey: 'IDtransaksi' });

// Definisikan relasi antara transaksi dan buku
transaksi.belongsTo(buku, { foreignKey: 'IDbuku' });
buku.belongsTo(transaksi, { foreignKey: 'IDtransaksi' });

pengembalian.belongsTo (transaksi, { foreignKey: 'IDpengembalian' });
transaksi.belongsTo (pengembalian, { foreignKey: 'IDtransaksi' });

module.exports = transaksi;