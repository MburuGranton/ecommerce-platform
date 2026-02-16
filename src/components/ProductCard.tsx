import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="card group">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-lg bg-gray-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            {product.category}
          </p>
          <h3 className="mt-1 font-heading text-base font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-600 active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
