import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  products,
  categories,
  getProductsByCategory,
  searchProducts,
} from '../data/products';
import ProductCard from '../components/ProductCard';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredProducts = useMemo(() => {
    let result = searchQuery
      ? searchProducts(searchQuery)
      : getProductsByCategory(activeCategory);

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="section-heading">
          {activeCategory === 'All' ? 'All Products' : activeCategory}
        </h1>
        <p className="text-gray-500">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Filters Bar */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative sm:max-w-xs sm:flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveCategory('All');
            }}
            className="input-field !pl-10"
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="input-field sm:max-w-[180px]"
        >
          <option value="default">Sort by: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Category Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
            <span className="ml-1.5 text-xs opacity-60">
              {category === 'All'
                ? products.length
                : products.filter((p) => p.category === category).length}
            </span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mx-auto h-16 w-16 text-gray-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <h3 className="mt-4 font-heading text-lg font-semibold text-gray-400">
            No products found
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Try adjusting your search or filter
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleCategoryChange('All');
            }}
            className="btn-secondary mt-6"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
