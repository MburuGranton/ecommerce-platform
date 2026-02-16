import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="font-heading text-lg font-bold text-gray-900">
            Your Cart
            {totalItems > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="btn-icon"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mb-4 h-16 w-16 text-gray-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p className="font-heading text-lg font-semibold text-gray-400">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Add some items to get started
              </p>
              <button
                onClick={closeCart}
                className="mt-6 btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-4">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={closeCart}
                    className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to={`/products/${product.id}`}
                        onClick={closeCart}
                        className="font-heading text-sm font-semibold text-gray-900 hover:text-brand-600"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-0.5 text-sm font-medium text-gray-500">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center rounded-lg border border-gray-200">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          className="px-2.5 py-1 text-gray-500 transition-colors hover:text-gray-900"
                          aria-label="Decrease quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="px-2.5 py-1 text-gray-500 transition-colors hover:text-gray-900"
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-xs font-medium text-gray-400 transition-colors hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="font-heading text-xl font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">
              Shipping and taxes calculated at checkout
            </p>

            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-primary mt-4 w-full"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="btn-secondary mt-2 w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
