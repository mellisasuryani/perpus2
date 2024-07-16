const express = require('express');
const router = express.Router();
const pengembalian = require('../models/pengembalian');

// Endpoint untuk menambahkan produk baru
router.post('/',  async (req, res, next) => {
    try {
        const { tanggalPengembalian, denda, total} =
    req.body;
        const newPengembalian = await pengembalian.create({ tanggalPengembalian, denda, total});
        res.status(201).json(newPengembalian);
    } catch (err) {
        next(err);
    }
    });
    
    // Endpoint untuk menampilkan semua produk
    router.get('/', async (req, res, next) => {
        try {
            const pengembalian = await pengembalian.findAll();
            res.json(pengembalian);
            } catch (err) {
            next(err);
            }
            });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res, next) => {
            try {
            const pengembalian = await pengembalian.findByPk(req.params.id);
            if (pengembalian) {
            res.json(pengembalian);
            } else {
            res.status(404).json({ message: 'pengembalian not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res, next) => {
            try {
            const { tanggalPengembalian, denda, total} =
            req.body;
            const pengembalian = await pengembalian.findByPk(req.params.id);
            if (pengembalian) {
        
            pengembalian.tanggalPengembalian = tanggalPengembalian;
            pengembalian.denda = denda;
            pengembalian.total = total;
    
            await pengembalian.save();
            res.json(pengembalian);
            } else {
            res.status(404).json({ message: 'pengembalian not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id',  async (req, res, next) => {
            try {
            const pengembalian = await pengembalian.findByPk(req.params.id);
            if (pengembalian) {
                await admin.destroy();
                res.json({ message: 'pengembalian deleted' });
                } else {
                res.status(404).json({ message: 'pengembalian not found' });
                }
                } catch (err) {
                next(err);
                }
                }); 
    
        module.exports = router;
    