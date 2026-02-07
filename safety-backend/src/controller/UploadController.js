const cloudinary = require('../config/cloudinary');

// Subir una imagen a Cloudinary
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No se proporcionó ninguna imagen'
      });
    }

    // Convertir buffer a base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Subir a Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'productos', // Carpeta en Cloudinary
      resource_type: 'auto'
    });

    res.json({
      success: true,
      message: 'Imagen subida exitosamente',
      data: {
        url: result.secure_url,
        public_id: result.public_id
      }
    });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({
      success: false,
      error: 'Error al subir la imagen',
      details: error.message
    });
  }
};

// Eliminar una imagen de Cloudinary
exports.deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({
        success: false,
        error: 'Se requiere el public_id de la imagen'
      });
    }

    await cloudinary.uploader.destroy(public_id);

    res.json({
      success: true,
      message: 'Imagen eliminada exitosamente'
    });
  } catch (error) {
    console.error('Error al eliminar imagen:', error);
    res.status(500).json({
      success: false,
      error: 'Error al eliminar la imagen',
      details: error.message
    });
  }
};