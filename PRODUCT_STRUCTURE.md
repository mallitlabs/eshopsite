# Golf E-Commerce Product Structure

## Main Categories

### 1. Clubs
**Subcategories:**
- Drivers (1-Wood)
- Fairway Woods (3-Wood, 5-Wood, 7-Wood)
- Hybrids
- Irons
- Wedges
- Putters
- Complete Sets

**Filters:**
- **Club Type**: Drivers, Woods, Hybrids, Irons, Wedges, Putters
- **Hand**: Right, Left
- **Gender**: Men's, Women's, Junior
- **Shaft Material**: Graphite, Steel
- **Shaft Flex**: Extra Stiff, Stiff, Regular, Senior, Ladies
- **Brand**: Titleist, Callaway, TaylorMade, Ping, etc.
- **Price Range**: Under $100, $100-$300, $300-$500, $500+
- **Skill Level**: Beginner, Intermediate, Advanced, Professional

**Iron-Specific Filters:**
- **Iron Group**: Long Irons (2-4), Mid Irons (5-7), Short Irons (8-9)
- **Iron Type**: Cavity Back, Blade, Game Improvement, Players Distance

**Wedge-Specific Filters:**
- **Wedge Type**: Pitching, Gap, Sand, Lob
- **Loft**: 48°, 52°, 56°, 60°, 64°

**Putter-Specific Filters:**
- **Putter Style**: Blade, Mallet, Center-Shafted, Heel-Shafted

---

### 2. Balls
**Filters:**
- **Compression**: Very Low (<45), Low (45-70), Medium (70-85), High (85-95+)
- **Construction**: 2-Piece, 3-Piece, 4-Piece, 5-Piece
- **Cover Material**: Surlyn/Ionomer, Urethane
- **Feel**: Soft, Medium, Firm
- **Skill Level**: Beginner, Intermediate, Advanced, Professional
- **Brand**: Titleist, Callaway, TaylorMade, Bridgestone, Srixon, etc.
- **Price Range**: Budget, Mid-Range, Premium
- **Color**: White, Yellow, Orange, Multi-Color

---

### 3. Shoes
**Subcategories:**
- Men's
- Women's
- Junior

**Filters:**
- **Spike Type**: Spiked, Spikeless
- **Waterproof**: Yes, No
- **Style**: Athletic, Classic, Casual
- **Closure**: Laces, BOA, Velcro
- **Width**: Standard, Wide, Narrow
- **Brand**: FootJoy, adidas, Nike, PUMA, Ecco, etc.
- **Price Range**: Under $75, $75-$150, $150-$250, $250+
- **Size**: 7-15 (US Men's), 5-12 (US Women's)

---

### 4. Gloves
**Subcategories:**
- Men's
- Women's
- Junior

**Filters:**
- **Material**: Cabretta Leather, Synthetic, Hybrid
- **Leather Grade**: A, AA, AAA (for leather gloves)
- **Weather Type**: All-Weather, Wet Weather, Winter
- **Hand**: Left (for right-handed golfers), Right (for left-handed golfers)
- **Size**: Small, Medium, Large, XL, etc.
- **Brand**: Titleist, FootJoy, Callaway, TaylorMade, etc.
- **Price Range**: Under $15, $15-$25, $25-$40, $40+
- **Color**: White, Black, Gray, Multi-Color

---

### 5. Bags
**Subcategories:**
- Stand Bags
- Cart Bags
- Carry Bags
- Travel Bags/Covers
- Sunday Bags

**Filters:**
- **Bag Type**: Stand, Cart, Carry, Travel, Sunday
- **Number of Dividers**: 4-Way, 6-Way, 8-Way, 14-Way
- **Weight**: Lightweight (Under 4 lbs), Medium (4-6 lbs), Heavy (6+ lbs)
- **Strap Type**: Single, Double
- **Waterproof**: Yes, No
- **Brand**: Titleist, Callaway, TaylorMade, Vessel, Sun Mountain, etc.
- **Price Range**: Under $100, $100-$200, $200-$300, $300+
- **Color**: Black, Navy, Red, White, Multi-Color

---

### 6. Accessories
**Subcategories:**
- Rangefinders & GPS
- Training Aids
- Tees & Ball Markers
- Towels
- Umbrellas
- Divot Tools
- Headcovers
- Push Carts
- Other

**Filters (by Subcategory):**

**Rangefinders & GPS:**
- Type: Laser Rangefinder, GPS Watch, GPS Handheld
- Features: Slope, No Slope, Bluetooth, Preloaded Courses
- Brand: Bushnell, Garmin, Blue Tees, etc.
- Price Range: Under $150, $150-$300, $300-$500, $500+

**Training Aids:**
- Type: Swing Trainers, Putting Aids, Alignment Sticks, Impact Bags
- Skill Focus: Swing, Putting, Alignment, Tempo

**Tees:**
- Material: Wood, Plastic, Bamboo
- Length: 2¾", 3¼", 4"
- Type: Standard, Brush, Step

**Umbrellas:**
- Size: 60", 62", 68"
- Features: Wind Resistant, UV Protection, Auto-Open
- Type: Standard, Double Canopy

---

### 7. Apparel (Optional for future expansion)
**Subcategories:**
- Shirts
- Pants & Shorts
- Outerwear
- Hats & Visors
- Belts

**Filters:**
- Gender: Men's, Women's, Junior
- Size: S, M, L, XL, XXL, etc.
- Weather Type: All-Weather, Cold Weather, Rain Gear
- Brand
- Price Range
- Color

---

## Featured Collections (Homepage)
- Best Sellers (across all categories)
- New Arrivals
- Featured Category: Clubs
- Featured Category: Balls
- Featured Category: Shoes
- Featured Category: Accessories
- Clearance/Sale Items

## Product Data Model (Example)
```typescript
interface Product {
  id: string
  name: string
  brand: string
  category: string // 'clubs', 'balls', 'shoes', etc.
  subcategory?: string
  price: number
  salePrice?: number
  images: string[]
  description: string
  specifications: Record<string, string>
  filters: {
    // Dynamic filters based on category
    [key: string]: string | string[]
  }
  featured: boolean
  bestSeller: boolean
  newArrival: boolean
  inStock: boolean
  rating?: number
  reviewCount?: number
}
```

## Implementation Notes
- All filters should support multiple selections (AND/OR logic)
- Price ranges should be adjustable sliders
- Search functionality should search across name, brand, description
- Sort options: Price (Low to High), Price (High to Low), Newest, Best Sellers, Highest Rated
- Product cards should display: image, name, brand, price, rating, "best seller" badge
