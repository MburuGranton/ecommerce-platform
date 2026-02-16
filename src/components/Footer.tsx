import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-gray-900">
                LUXE<span className="text-brand-600">.</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Curated lifestyle essentials for the modern individual. Quality
              craftsmanship, timeless design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5">
              {['New Arrivals', 'Best Sellers', 'Clothing', 'Accessories'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/products"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {['About Us', 'Sustainability', 'Careers', 'Press'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-gray-500 cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-gray-500 cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved. This is
            a demo project.
          </p>
          <div className="flex gap-5">
            {/* Social icons */}
            {[
              {
                label: 'Instagram',
                path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z',
              },
              {
                label: 'Twitter',
                path: 'M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 0 0-8.13 4.35C7.69 9.4 4.07 7.6 1.64 4.83a4.77 4.77 0 0 0 1.47 6.37 4.73 4.73 0 0 1-2.16-.6v.06a4.77 4.77 0 0 0 3.83 4.68c-.7.19-1.44.23-2.17.09a4.77 4.77 0 0 0 4.46 3.31A9.57 9.57 0 0 1 0 20.58a13.48 13.48 0 0 0 7.29 2.14c8.75 0 13.53-7.25 13.53-13.53 0-.2 0-.42-.02-.63A9.65 9.65 0 0 0 24 4.56a9.5 9.5 0 0 1-2.73.75l-1.81-.31Z',
              },
            ].map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
