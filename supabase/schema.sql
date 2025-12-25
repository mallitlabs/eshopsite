-- Supabase Schema for Golf Shop E-commerce
-- Run this in the Supabase SQL Editor to create your tables

-- Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) NOT NULL UNIQUE,
  description VARCHAR(500),
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for category lookups
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_display_order ON categories(display_order);

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  price DECIMAL(18,2) NOT NULL,
  sale_price DECIMAL(18,2),
  category VARCHAR(50) NOT NULL,
  subcategory VARCHAR(50),
  description VARCHAR(1000) NOT NULL,
  image_url TEXT,
  images JSONB DEFAULT '[]'::jsonb,
  slug VARCHAR(200) NOT NULL UNIQUE,
  featured BOOLEAN DEFAULT false,
  best_seller BOOLEAN DEFAULT false,
  new_arrival BOOLEAN DEFAULT false,
  in_stock BOOLEAN DEFAULT true,
  stock_quantity INTEGER DEFAULT 0,
  rating DECIMAL(3,2),
  review_count INTEGER,
  specifications JSONB DEFAULT '{}'::jsonb,
  filters JSONB DEFAULT '{}'::jsonb,
  body_content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  is_published BOOLEAN DEFAULT true
);

-- Create indexes for common queries
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_products_best_seller ON products(best_seller);
CREATE INDEX idx_products_in_stock ON products(in_stock);
CREATE INDEX idx_products_is_published ON products(is_published);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at on products
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
-- Enable RLS on tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active categories
CREATE POLICY "Allow public read access to active categories"
  ON categories FOR SELECT
  USING (is_active = true);

-- Allow public read access to published products
CREATE POLICY "Allow public read access to published products"
  ON products FOR SELECT
  USING (is_published = true);

-- For admin operations, you would create additional policies
-- using authenticated users or service role key
