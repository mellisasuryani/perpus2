const express = require('express');
const router = express.Router();
const admin =require('../models/admin');

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
    router.get('/', async (req, res, next) => {
        try {
            const admin = await admin.findAll();
            res.json(admin);
            } catch (err) {
            next(err);
        }
    });

     // Endpoint untuk menampilkan produk berdasarkan ID
     router.get('/:id',  async (req, res, next) => {
     try {
     const admin = await admin.findByPk(req.params.id);
     if (admin) {
     res.json(admin);
     } else {
     res.status(404).json({ message: 'admin not found' });
     }
     } catch (err) {
     next(err);
     }
     });
     // Endpoint untuk memperbarui produk berdasarkan ID
     router.put('/:id', async(req, res, next) => {
     try {
     const { nama, alamat} =
     req.body;
     const admin = await admin.findByPk(req.params.id);
     if (admin) {
     admin.nama = nama;
     admin.alamat = alamat;
     await admin.save();
     res.json(admin);
     } else {
     res.status(404).json({ message: 'admin not found' });
     }
     } catch (err) {
     next(err);
     }
     });
     // Endpoint untuk menghapus produk berdasarkan ID
     router.delete('/:id', async (req, res, next) => {
     try {
     const admin = await admin.findByPk(req.params.id);
     if (admin) {
         await admin.destroy();
         res.json({ message: 'admin deleted' });
         } else {
         res.status(404).json({ message: 'admin not found' });
        }
    } catch (err) {
    next(err);
    }
    }); 

module.exports = router;

