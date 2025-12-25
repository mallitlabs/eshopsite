// API client for Golf Shop using Supabase
import { supabase } from './supabase';

/**
 * Transform database row to camelCase for frontend consistency
 */
function transformProduct(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    brand: row.brand,
    price: parseFloat(row.price),
    salePrice: row.sale_price ? parseFloat(row.sale_price) : null,
    category: row.category,
    subcategory: row.subcategory,
    description: row.description,
    imageUrl: row.image_url,
    images: row.images || [],
    slug: row.slug,
    featured: row.featured,
    bestSeller: row.best_seller,
    newArrival: row.new_arrival,
    inStock: row.in_stock,
    stockQuantity: row.stock_quantity,
    rating: row.rating ? parseFloat(row.rating) : null,
    reviewCount: row.review_count,
    specifications: row.specifications || {},
    filters: row.filters || {},
    bodyContent: row.body_content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    isPublished: row.is_published,
  };
}

/**
 * Transform category row to camelCase
 */
function transformCategory(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    imageUrl: row.image_url,
    displayOrder: row.display_order,
    isActive: row.is_active,
  };
}

/**
 * Fetch all products with optional filters
 * @param {Object} params - Query parameters for filtering
 * @returns {Promise<Array>} Array of products
 */
export async function getProducts(params = {}) {
  try {
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_published', true);

    // Apply filters
    if (params.category) {
      query = query.eq('category', params.category);
    }
    if (params.featured !== undefined) {
      query = query.eq('featured', params.featured);
    }
    if (params.bestSeller !== undefined) {
      query = query.eq('best_seller', params.bestSeller);
    }
    if (params.inStock !== undefined) {
      query = query.eq('in_stock', params.inStock);
    }
    if (params.brand) {
      query = query.eq('brand', params.brand);
    }
    if (params.limit) {
      query = query.limit(params.limit);
    }

    // Order by created_at descending by default
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return (data || []).map(transformProduct);
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
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    return transformProduct(data);
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
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    return transformProduct(data);
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
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      throw error;
    }

    // Get product counts for each category
    const categoriesWithCounts = await Promise.all(
      (data || []).map(async (category) => {
        const { count } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('category', category.slug)
          .eq('is_published', true);

        return {
          ...transformCategory(category),
          productCount: count || 0,
        };
      })
    );

    return categoriesWithCounts;
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
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    // Get product count for this category
    const { count } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('category', slug)
      .eq('is_published', true);

    return {
      ...transformCategory(data),
      productCount: count || 0,
    };
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
    const { data, error } = await supabase
      .from('products')
      .insert({
        title: productData.title,
        brand: productData.brand,
        price: productData.price,
        sale_price: productData.salePrice,
        category: productData.category,
        subcategory: productData.subcategory,
        description: productData.description,
        image_url: productData.imageUrl,
        images: productData.images || [],
        slug: productData.slug,
        featured: productData.featured || false,
        best_seller: productData.bestSeller || false,
        new_arrival: productData.newArrival || false,
        in_stock: productData.inStock !== false,
        stock_quantity: productData.stockQuantity || 0,
        rating: productData.rating,
        review_count: productData.reviewCount,
        specifications: productData.specifications || {},
        filters: productData.filters || {},
        body_content: productData.bodyContent,
        is_published: productData.isPublished !== false,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return transformProduct(data);
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
    const updateData = {};

    // Only include fields that are provided
    if (productData.title !== undefined) updateData.title = productData.title;
    if (productData.brand !== undefined) updateData.brand = productData.brand;
    if (productData.price !== undefined) updateData.price = productData.price;
    if (productData.salePrice !== undefined) updateData.sale_price = productData.salePrice;
    if (productData.category !== undefined) updateData.category = productData.category;
    if (productData.subcategory !== undefined) updateData.subcategory = productData.subcategory;
    if (productData.description !== undefined) updateData.description = productData.description;
    if (productData.imageUrl !== undefined) updateData.image_url = productData.imageUrl;
    if (productData.images !== undefined) updateData.images = productData.images;
    if (productData.slug !== undefined) updateData.slug = productData.slug;
    if (productData.featured !== undefined) updateData.featured = productData.featured;
    if (productData.bestSeller !== undefined) updateData.best_seller = productData.bestSeller;
    if (productData.newArrival !== undefined) updateData.new_arrival = productData.newArrival;
    if (productData.inStock !== undefined) updateData.in_stock = productData.inStock;
    if (productData.stockQuantity !== undefined) updateData.stock_quantity = productData.stockQuantity;
    if (productData.rating !== undefined) updateData.rating = productData.rating;
    if (productData.reviewCount !== undefined) updateData.review_count = productData.reviewCount;
    if (productData.specifications !== undefined) updateData.specifications = productData.specifications;
    if (productData.filters !== undefined) updateData.filters = productData.filters;
    if (productData.bodyContent !== undefined) updateData.body_content = productData.bodyContent;
    if (productData.isPublished !== undefined) updateData.is_published = productData.isPublished;

    const { error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return true;
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
    const { error } = await supabase
      .from('products')
      .update({
        stock_quantity: quantity,
        in_stock: quantity > 0,
      })
      .eq('id', id);

    if (error) {
      throw error;
    }

    return true;
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
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
}
