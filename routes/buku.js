const express = require('express');
const router = express.Router();
const buku = require('../models/buku');
const { authenticate, authorize } = require('../middleware/auth');

// Endpoint untuk menambahkan produk baru
//pada bagian ini saya menambahkan jwt agar hanya admin yang memiliki token saja yang mampu menambahkan data buku baru pada sistem
router.post('/',  authenticate, authorize (['admin']),  async (req, res) => {
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
    //pada bagian ini saya tidak menambahkan jwt agar tidak hanya admin saja yang bisa melihat data buku, namun juga anggota lainnya
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
            
            router.get('/:id',   async (req, res) => {
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
            //pada bagian ini saya menambahkan jwt agar hanya admin yang memiliki token saja yang mampu memperbarui data buku  pada sistem
            router.put('/:id', authenticate, authorize(['admin']),  async (req, res) => {
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
                    //pada bagian ini saya menambahkan jwt agar hanya admin yang memiliki token saja yang mampu menghapus data buku  pada sistem
                    router.delete('/:id', authenticate, authorize(['admin']), async (req, res) => {
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
            
            