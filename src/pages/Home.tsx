import { Link } from 'react-router-dom';
import { products, getFeaturedProducts, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
            alt="Hero"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              New Collection 2026
            </p>
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Elevate Your
              <br />
              <span className="text-brand-400">Everyday Style</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Discover curated essentials crafted from premium materials.
              Timeless pieces designed for the modern lifestyle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary !bg-white !text-gray-900 hover:!bg-gray-100">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link to="/products" className="btn-secondary !border-white/20 !bg-transparent !text-white hover:!bg-white/10">
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee-style trust bar */}
      <section className="border-b border-gray-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs font-medium uppercase tracking-widest text-gray-400 sm:px-6 lg:px-8">
          <span>Free Shipping Over $150</span>
          <span className="hidden sm:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">·</span>
          <span>Sustainable Materials</span>
          <span className="hidden sm:inline">·</span>
          <span>Premium Quality</span>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories
            .filter((c) => c !== 'All')
            .map((category) => {
              const images: Record<string, string> = {
                Clothing:
                  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=500&fit=crop',
                Accessories:
                  'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=500&fit=crop',
                Footwear:
                  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
                Bags: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
              };
              return (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100"
                >
                  <img
                    src={images[category]}
                    alt={category}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {category}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {products.filter((p) => p.category === category).length}{' '}
                      Products
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-heading">Featured Products</h2>
              <p className="section-subheading">Our most popular picks</p>
            </div>
            <Link
              to="/products"
              className="hidden items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 sm:flex"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-3 text-gray-400">
              Subscribe to our newsletter for exclusive access to new
              collections, style tips, and member-only offers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field sm:max-w-xs !bg-white/10 !border-white/20 !text-white !placeholder-gray-500 focus:!border-brand-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
