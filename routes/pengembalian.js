const express = require('express');
const router = express.Router();
const pengembalian = require('../models/pengembalian');

// Endpoint untuk menambahkan produk baru
router.post('/',  async (req, res) => {
    try {
        const { tanggalPengembalian, denda, total} = req.body;
        const newPengembalian = await pengembalian.create({ tanggalPengembalian, denda, total});
        res.status(201).json(newPengembalian);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
    
    // Endpoint untuk menampilkan semua produk
    router.get('/', async (req, res) => {
        try {
            const pengembalians = await pengembalian.findAll();
            if (pengembalians.length === 0) {
                res.status(404).json({ message: 'pengembalians not found' });
            } else {
                res.json(pengembalians);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res) => {
            try {
                const { id } = req.params;
            const pengembalians = await pengembalian.findByPk(id);
            if (!pengembalian) throw new Error('pengembalian not found');
            res.json(pengembalians);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const pengembalians = await pengembalian.findByPk(id);
            const { tanggalPengembalian, denda, total} = req.body;
            if (!pengembalian) throw new Error('pengembalian not found');
        
            pengembalians.tanggalPengembalian = tanggalPengembalian;
            pengembalians.denda = denda;
            pengembalians.total = total;
    
            await pengembalians.save();
            res.json(pengembalians);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id',  async (req, res) => {
            try {
                const { id } = req.params;
            const pengembalians = await pengembalian.findByPk(id);
            if (!pengembalian) throw new Error('pengembalian not found');
                await pengembalians.destroy();
                res.sendStatus(204);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        });

        
        module.exports = router;
    