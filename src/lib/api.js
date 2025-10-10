// API client for Golf Shop backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5065/api';

/**
 * Fetch all products with optional filters
 * @param {Object} params - Query parameters for filtering
 * @returns {Promise<Array>} Array of products
 */
export async function getProducts(params = {}) {
  try {
    const query = new URLSearchParams();

    // Add non-empty params to query string
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        query.append(key, value);
      }
    });

    const url = `${API_BASE_URL}/products${query.toString() ? `?${query.toString()}` : ''}`;
    const response = await fetch(url, {
      cache: 'no-store', // Always get fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object|null>} Product object or null
 */
export async function getProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch product: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
}

/**
 * Fetch a single product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Object|null>} Product object or null
 */
export async function getProductBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/by-slug/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch product: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

/**
 * Fetch all categories
 * @returns {Promise<Array>} Array of categories
 */
export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch a single category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Object|null>} Category object or null
 */
export async function getCategoryBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch category: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching category by slug:', error);
    return null;
  }
}

/**
 * Create a new product
 * @param {Object} productData - Product data
 * @returns {Promise<Object|null>} Created product or null
 */
export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create product: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

/**
 * Update a product
 * @param {number} id - Product ID
 * @param {Object} productData - Updated product data
 * @returns {Promise<boolean>} Success status
 */
export async function updateProduct(id, productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...productData, id }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error updating product:', error);
    return false;
  }
}

/**
 * Update product stock
 * @param {number} id - Product ID
 * @param {number} quantity - New stock quantity
 * @returns {Promise<boolean>} Success status
 */
export async function updateProductStock(id, quantity) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}/stock`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quantity),
    });

    return response.ok;
  } catch (error) {
    console.error('Error updating product stock:', error);
    return false;
  }
}

/**
 * Delete a product
 * @param {number} id - Product ID
 * @returns {Promise<boolean>} Success status
 */
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });

    return response.ok;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
}
