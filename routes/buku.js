const express = require('express');
const router = express.Router();
const buku = require('../models/buku');

// Endpoint untuk menambahkan produk baru
router.post('/',   async (req, res) => {
    try {
        const { judul, pengarang, penerbit, isbn, tahunTerbit } =
    req.body;
        const newBuku = await buku.create({ judul, pengarang, penerbit, isbn, tahunTerbit});
        res.status(201).json(newBuku);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
    
    // Endpoint untuk menampilkan semua produk
    router.get('/',  async (req, res) => {
        try {
            const bukus = await buku.findAll();
            if (bukus.length === 0) {
                res.status(404).json({ message: 'buku not found' });
            } else {
                res.json(bukus);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
            // Endpoint untuk menampilkan produk berdasarkan ID
            router.get('/:id',  async (req, res) => {
            try {
                const { id } = req.params;
            const bukus = await buku.findByPk(id);
            if (!buku) throw new Error('buku not found');
            res.json(bukus);
            }  catch (error) {
                res.status(500).json({ message: error.message });
            }
        });

        
            // Endpoint untuk memperbarui produk berdasarkan ID
            router.put('/:id', async (req, res) => {
                try {
                    const { id } = req.params;
                    const bukus = await buku.findByPk(id);
                    const { judul, pengarang, penerbit, isbn, tahunTerbit} = req.body;
                    if (!buku) throw new Error('buku not found');
                    bukus.judul = judul;
                    bukus.pengarang = pengarang;
                    bukus.penerbit = penerbit;
                    bukus.isbn= isbn;
                    
                    
                    
                    bukus.tahunTerbit = tahunTerbit;
                    await bukus.save();
                    res.json(bukus);
                } catch (error) {
                    res.status(400).json({ message: error.message });
                }
            });

                    // Endpoint untuk menghapus produk berdasarkan ID
                    router.delete('/:id',  async (req, res) => {
                    try {
                        const { id } = req.params;
                    const  bukus = await  buku.findByPk(id);
                    if (!buku) throw new Error('buku not found');
                        await bukus.destroy();
                        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
                    });

                module.exports = router;
            
            