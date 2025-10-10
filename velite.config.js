import { defineConfig, s } from 'velite'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const codeOptions = {
  theme: 'github-dark',
  grid: false,
}

// Define the product schema
const product = s
  .object({
    title: s.string(),
    brand: s.string(),
    price: s.number(),
    salePrice: s.number().optional(),
    category: s.string(), // clubs, balls, shoes, gloves, bags, accessories
    subcategory: s.string().optional(),
    description: s.string(),
    image: s.image().optional(),
    images: s.array(s.string()).optional(),
    isPublished: s.boolean().default(true),
    featured: s.boolean().default(false),
    bestSeller: s.boolean().default(false),
    newArrival: s.boolean().default(false),
    inStock: s.boolean().default(true),
    rating: s.number().optional(),
    reviewCount: s.number().optional(),
    specifications: s.record(s.string()).optional(),
    filters: s.record(s.any()).optional(),
    body: s.mdx(),
    slug: s.string(),
  })
  .transform(data => {
    return {
      ...data,
      url: `/products/${data.slug}`,
      image: data.image ? {
        ...data.image,
        src: data.image.src.replace("/static", "/products"),
      } : null,
    }
  })

export default defineConfig({
  root: 'content',
  collections: {
    products: {
      name: 'Product',
      pattern: 'products/**/*.mdx',
      schema: product,
    },
  },
  output: {
    data: '.velite/generated',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  // Add MDX plugins
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions]
    ]
  }
})
