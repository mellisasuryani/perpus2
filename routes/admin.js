const express = require('express');
const router = express.Router();
const admin = require('../models/admin');


// Endpoint untuk menambahkan produk baru
router.post('/', async (req, res, next) => {
    try {
        const { nama, alamat} =
    req.body;
        const newAdmin = await admin.create({ nama, alamat});
        res.status(201).json(newAdmin);
    } catch (err) {
        next(err);
    }
    });
    
    // Endpoint untuk menampilkan semua produk
    router.get('/', async (req, res) => {
        try {
            const admins = await admin.findAll();
            if (admins.length === 0) {
                res.status(404).json({ message: 'admins not found' });
            } else {
            res.json(admins);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

     // Endpoint untuk menampilkan produk berdasarkan ID
     router.get('/:id',  async (req, res) => {
        try {
        const { id } = req.params;
        const admins = await admin.findByPk(id);
        if (!admin) throw new Error('admin not found');
    res.json(admins);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});
     
        
   
     // Endpoint untuk memperbarui produk berdasarkan ID
     router.put('/:id', async(req, res) => {
     try {
        const { id } = req.params;
    const admins = await admin.findByPk(id);
     const { nama, alamat} = req.body;
     if (!admin) throw new Error('admin not found');
     admins.nama = nama;
     admins.alamat = alamat;
     await admins.save();
     res.json(admins);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
     // Endpoint untuk menghapus produk berdasarkan ID
     router.delete('/:id', async (req, res) => {
     try {
        const { id } = req.params;
     const admins = await admin.findByPk(id);
     if (!admin) throw new Error('admin not found');
         await admins.destroy();
         res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;

