import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  label: string;
  path: string;
  dropdown?: { label: string; path: string }[];
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    {
      label: 'Company',
      path: '/about',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Investment Strategy', path: '/investment-strategy' },
        { label: 'Portfolio', path: '/portfolio' }
      ]
    },
    {
      label: 'Network',
      path: '/scientific-network',
      dropdown: [
        { label: 'Scientific Network', path: '/scientific-network' },
        { label: 'Global Network', path: '/global-network' },
        { label: 'Regional Commercialization', path: '/regional-commercialization' }
      ]
    },
    {
      label: 'Resources',
      path: '/news',
      dropdown: [
        { label: 'News & Blog', path: '/news' },
        { label: 'Resources', path: '/resources' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 bg-white shadow-md'
          : 'relative bg-white border-b border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">VentureCapital</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center space-x-1 ${
                        link.dropdown.some((item) => isActivePath(item.path))
                          ? 'text-red-600'
                          : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                        activeDropdown === link.label ? 'opacity-100 visible' : ''
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${
                            isActivePath(item.path) ? 'bg-red-50 text-red-600' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 font-medium transition-colors ${
                      isActivePath(link.path)
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          {navLinks.map((link) => (
            <div key={link.label} className="py-2">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(link.label)}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <span className="font-medium">{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.label ? 'max-h-48 mt-1' : 'max-h-0'
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-8 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors ${
                          isActivePath(item.path) ? 'bg-red-50 text-red-600' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md font-medium transition-colors ${
                    isActivePath(link.path)
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-4 mt-4">
            <Link
              to="/contact"
              className="block w-full bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
