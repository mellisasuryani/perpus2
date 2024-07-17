const express = require('express');
const router = express.Router();
const transaksi = require('../models/transaksi'); 

// Endpoint untuk menambahkan produk baru
router.post('/',   async (req, res) => {
    try {
        const { tanggalPeminjaman, IDanggota, IDbuku, IDpengembalian } = req.body;
        const newTransaksi = await transaksi.create({ tanggalPeminjaman, IDanggota, IDbuku, IDpengembalian });
        res.status(201).json(newTransaksi);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res) => {
        try {
            const transaksis = await transaksi.findAll();
            if (transaksis.length === 0) {
                res.status(404).json({ message: 'transaksi not found' });
            } else {
                res.json(transaksis);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id', async (req, res) => {
            try {
                const { id } = req.params;
            const transaksis = await transaksi.findByPk(id);
            if (!transaksi) throw new Error('transaksi not found');
            res.json(transaksis);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const transaksis = await transaksi.findByPk(id);
            const { tanggalPeminjaman, IDanggota, IDbuku, IDpengembalian } = req.body;
            if (!transaksi) throw new Error('transaksi not found');
            transaksis.tanggalPeminjaman = tanggalPeminjaman;
            transaksis.IDanggota = IDanggota;
            transaksis.IDbuku = IDbuku;
            transaksis.IDpengembalian = IDpengembalian;
            await transaksis.save();
            res.json(transaksis);
           
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id',  async (req, res) => {
            try {
                const { id } = req.params;
            const transaksis = await transaksi.findByPk(id);
            if (!transaksi) throw new Error('transaksi not found');
                await transaksis.destroy();
                res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

        module.exports = router;
    