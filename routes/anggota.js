const express = require('express');
const router = express.Router();
const anggota = require('../models/anggota'); // Impor model Product
const { authenticate, authorize } = require('../middleware/auth');

// Endpoint untuk menambahkan produk baru
router.post('/', authenticate, authorize(['admin']),  async (req, res, next) => {
    try {
        const { nama, noHP} =
    req.body;
        const newAnggota= await anggota.create({ nama, noHP});
        res.status(201).json(newAnggota);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res) => {
        try {
            const anggotas = await anggota.findAll();
            if (anggotas.length === 0) {
                res.status(404).json({ message: 'anggotas not found' });
            } else {
                res.json(anggotas);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res) => {
            try {
                const { id } = req.params;
            const anggotas = await anggota.findByPk(id);
            if (!anggota) throw new Error('anggota not found');
        res.json(anggotas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', authenticate, authorize(['admin']),  async (req, res) => {
            try {
                const { id } = req.params;
                const anggotas = await anggota.findByPk(id);
            const { nama, noHP} = req.body;
            if (!anggota) throw new Error('anggota not found');
            anggotas.nama = nama;
            anggotas.noHP = noHP;
            await anggotas.save();
            res.json(anggotas);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });
            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id', authenticate, authorize(['admin']),   async (req, res) => {
            try {
                const { id } = req.params;
            const anggotas = await anggota.findByPk(id);
            if (!anggota) throw new Error('anggota not found');
                await anggotas.destroy();
                res.sendStatus(204);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
        
    
        module.exports = router;
    