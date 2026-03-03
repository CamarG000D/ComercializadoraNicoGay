const API_URL = 'http://localhost:3000/api';

// ============= CATEGORÍAS =============

export const getCategorias = async () => {
  try {
    const response = await fetch(`${API_URL}/categorias`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

export const getCategoriaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/categorias/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener categoría:', error);
    throw error;
  }
};

export const createCategoria = async (categoriaData) => {
  try {
    const response = await fetch(`${API_URL}/categorias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoriaData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear categoría:', error);
    throw error;
  }
};

// ============= PRODUCTOS =============

export const getProductos = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener producto:', error);
    throw error;
  }
};

export const getProductosByCategoria = async (categoriaId) => {
  try {
    const response = await fetch(`${API_URL}/productos/categoria/${categoriaId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    throw error;
  }
};

export const searchProductos = async (query) => {
  try {
    const response = await fetch(`${API_URL}/productos/search?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al buscar productos:', error);
    throw error;
  }
};

export const createProducto = async (productoData) => {
  try {
    const response = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }
};

export const updateProducto = async (id, productoData) => {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
  }
};

export const deleteProducto = async (id) => {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
};

// ============= UPLOAD IMÁGENES =============

export const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${API_URL}/upload/image`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al subir imagen:', error);
    throw error;
  }
};