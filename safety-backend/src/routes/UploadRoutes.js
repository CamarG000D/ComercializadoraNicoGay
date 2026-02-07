const express = require('express');
const router = express.Router();
const uploadController = require('../controller/UploadController');
const upload = require('../middleware/upload');

// Subir una imagen
router.post('/image', upload.single('image'), uploadController.uploadImage);

// Eliminar una imagen
router.delete('/image', uploadController.deleteImage);

module.exports = router;