const express = require('express');
const router = express.Router();
const buku = require('../models/buku');

// Endpoint untuk menambahkan produk baru
router.post('/',   async (req, res, next) => {
    try {
        const { judul, pengarang, penerbit, isbn, tahunTerbit } =
    req.body;
        const newBuku = await buku.create({ judul, pengarang, penerbit, isbn, tahunTerbit});
        res.status(201).json(newBuku);
    } catch (err) {
        next(err);
    }
    });
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res, next) => {
        try {
            const buku = await buku.findAll();
            res.json(buku);
            } catch (err) {
            next(err);
            }
            });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res, next) => {
            try {
            const buku = await buku.findByPk(req.params.id);
            if (buku) {
            res.json(buku);
            } else {
            res.status(404).json({ message: 'buku not found' });
            }
            } catch (err) {
            next(err);
            }
            });
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res, next) => {
                try {
                    const { judul, pengarang, penerbit, isbn, tahunTerbit} =
                    req.body;
                    const buku = await buku.findByPk(req.params.id);
                    if (buku) {
                
                    buku.judul = judul;
                    buku.pengarang = pengarang;
                    buku.penerbit = penerbit;
                    buku.isbn= isbn;
                    buku.tahunTerbit = tahunTerbit;
                    
            
                    await buku.save();
                    res.json(buku);
                    } else {
                    res.status(404).json({ message: 'buku not found' });
                    }
                    } catch (err) {
                    next(err);
                    }
                    });
                    // Endpoint untuk menghapus produk berdasarkan ID
                    router.delete('/:id',  async (req, res, next) => {
                    try {
                    const  buku = await  buku.findByPk(req.params.id);
                    if (buku) {
                        await admin.destroy();
                        res.json({ message: 'buku deleted' });
                        } else {
                        res.status(404).json({ message: 'buku not found' });
                        }
                        } catch (err) {
                        next(err);
                        }
                        }); 
            
                module.exports = router;
            
            