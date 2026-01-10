import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link to="/" className="font-sans text-2xl font-bold tracking-tight text-white flex items-center">
                    ticketz<span className="text-lime">.</span>
                </Link>
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-400">
                    <Link to="/discovery" className="hover:text-white transition-colors">Discovery</Link>
                    <Link to="/communities" className="hover:text-white transition-colors">Communities</Link>
                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/app" className="text-sm font-semibold text-lime hover:text-limehover transition-colors">Open App</Link>
                <div className="w-px h-5 bg-white/10"></div>
                <Link to="/auth/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Log In</Link>
                <Link to="/auth/login" className="bg-lime text-dark px-4 py-2 rounded-sm font-bold text-sm hover:bg-limehover transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Sign Up
                </Link>
            </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5 px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-sans text-xl font-bold tracking-tight text-white">ticketz<span className="text-lime">.</span></Link>
        <button
          className="text-white w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-16 right-0 bottom-0 z-40 w-72 bg-surface border-l border-white/10 transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-white font-medium py-3 px-4 rounded-sm hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/app"
              className="text-lime font-semibold py-3 px-4 rounded-sm hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Open App
            </Link>
            <Link
              to="/discovery"
              className="text-gray-400 font-medium py-3 px-4 rounded-sm hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Discovery
            </Link>
            <Link
              to="/communities"
              className="text-gray-400 font-medium py-3 px-4 rounded-sm hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Communities
            </Link>
            <Link
              to="/about"
              className="text-gray-400 font-medium py-3 px-4 rounded-sm hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          {/* Divider */}
          <div className="border-t border-white/10 my-6" />

          {/* Auth Actions */}
          <div className="flex flex-col gap-3">
            <Link
              to="/auth/login"
              className="text-center text-white font-medium py-3 px-4 rounded-sm border border-white/20 hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/auth/login"
              className="text-center bg-lime text-dark font-bold py-3 px-4 rounded-sm hover:bg-limehover transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              Sign Up
            </Link>
          </div>

          {/* Bottom spacer for mobile nav */}
          <div className="flex-1" />

          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Ticketz Inc.
          </p>
        </div>
      </div>
    </>
  );
}
