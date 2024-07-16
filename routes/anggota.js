const express = require('express');
const router = express.Router();
const anggota = require('../models/anggota'); // Impor model Product

// Endpoint untuk menambahkan produk baru
router.post('/', async (req, res, next) => {
    try {
        const { nama, noHP} =
    req.body;
        const newAnggota= await anggota.create({ nama, noHP});
        res.status(201).json(newAnggota);
    } catch (err) {
        next(err);
    }
    });
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res, next) => {
        try {
            const anggota = await anggota.findAll();
            res.json(anggota);
            } catch (err) {
            next(err);
            }
            });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res, next) => {
            try {
            const anggota= await anggota.findByPk(req.params.id);
            if (anggota) {
            res.json(anggota);
            } else {
                res.status(404).json({ message: 'anggota not found' });
            }
            } catch (err) {
            next(err);
            }	
            });
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id',  async (req, res, next) => {
            try {
            const { nama, noHP} =
            req.body;
            const anggota = await anggota.findByPk(req.params.id);
            if (anggota) {
            product.nama = nama;
            product.noHP = noHP;
            await anggota.save();
            res.json(anggota);
            } else {
            res.status(404).json({ message: 'anggota not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk menghapus produk berdasarkan ID
            router.delete('/:id', async (req, res, next) => {
            try {
            const anggota = await anggota.findByPk(req.params.id);
            if (anggota) {
                await anggota.destroy();
                res.json({ message: 'Anggota deleted' });
                } else {
                res.status(404).json({ message: 'Anggota not found' });
                }
                } catch (err) {
                next(err);
                }
                }); 
    
        module.exports = router;
    