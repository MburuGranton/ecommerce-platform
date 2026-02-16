import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-brand-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold text-gray-900">
          Order Confirmed!
        </h1>
        <p className="mt-3 text-gray-500">
          Thank you for your purchase, {form.firstName}! Your order has been
          placed successfully. A confirmation email will be sent to{' '}
          <span className="font-medium text-gray-700">{form.email}</span>.
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Order #{Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
        <Link to="/products" className="btn-primary mt-8 inline-flex">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mx-auto h-16 w-16 text-gray-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <h1 className="mt-6 font-heading text-2xl font-bold text-gray-900">
          Your cart is empty
        </h1>
        <p className="mt-2 text-gray-500">
          Add some products before checking out.
        </p>
        <Link to="/products" className="btn-primary mt-6 inline-flex">
          Browse Products
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 150 ? 0 : 12.0;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shipping + tax;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="section-heading">Checkout</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3"
        >
          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              Contact Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  value={form.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="input-field"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  value={form.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="input-field"
                  placeholder="Doe"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="mt-10">
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              Shipping Address
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  required
                  type="text"
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="input-field"
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  required
                  type="text"
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="input-field"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  required
                  type="text"
                  value={form.zip}
                  onChange={(e) => handleChange('zip', e.target.value)}
                  className="input-field"
                  placeholder="10001"
                />
              </div>
            </div>
          </div>

          {/* Payment placeholder */}
          <div className="mt-10">
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              Payment
            </h2>
            <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-500">
                💳 Payment processing is simulated in this demo.
                <br />
                Click "Place Order" to complete your purchase.
              </p>
            </div>
          </div>

          <button type="submit" className="btn-primary mt-8 w-full text-base">
            Place Order — ${orderTotal.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              Order Summary
            </h2>

            <ul className="mt-4 divide-y divide-gray-100">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-3">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-sm font-semibold text-gray-900">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Qty: {quantity}
                    </p>
                  </div>
                  <p className="self-center text-sm font-semibold text-gray-900">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="font-medium text-brand-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-3 text-base font-bold text-gray-900">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            {shipping === 0 && (
              <p className="mt-3 text-center text-xs text-brand-600">
                ✓ You qualify for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
