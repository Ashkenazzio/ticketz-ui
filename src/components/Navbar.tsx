import { useState } from 'react';
import { Menu, X, Download, ChevronDown, Ticket, ShoppingBag, Users, Heart, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const userMenuItems = [
  { label: 'My Tickets', path: '/wallet', icon: Ticket },
  { label: 'My Orders', path: '/orders', icon: ShoppingBag },
  { label: 'My Communities', path: '/my-communities', icon: Users },
  { label: 'Saved Events', path: '/saved', icon: Heart },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    navigate('/');
  };

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
              <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/app" className="text-sm font-semibold text-lime hover:text-limehover transition-colors">
                Open App
              </Link>
              <Link
                to="/dashboard"
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <div className="w-px h-5 bg-white/10" />

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-lime">
                    <img
                      src={user?.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-surface border border-white/10 shadow-xl z-50">
                      {/* User Info */}
                      <div className="p-4 border-b border-white/10">
                        <div className="font-semibold text-white">{user?.name}</div>
                        <div className="text-sm text-gray-400">{user?.email}</div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-gray-500" />
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-white/10 py-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors w-full"
                        >
                          <LogOut className="w-4 h-4" />
                          Log Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/app" className="text-sm font-semibold text-lime hover:text-limehover transition-colors">
                Open App
              </Link>
              <div className="w-px h-5 bg-white/10" />
              <Link to="/auth/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Log In
              </Link>
              <Link
                to="/auth/register"
                className="bg-lime text-dark px-4 py-2 font-bold text-sm hover:bg-limehover transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5 px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-sans text-xl font-bold tracking-tight text-white">
          ticketz<span className="text-lime">.</span>
        </Link>
        <div className="flex items-center gap-3">
          {isLoggedIn && user && (
            <Link to="/profile" className="w-8 h-8 rounded-full overflow-hidden border-2 border-lime">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          )}
          <button
            className="text-white w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
        className={`md:hidden fixed top-16 right-0 bottom-0 z-40 w-72 bg-surface border-l border-white/10 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* User Info (if logged in) */}
          {isLoggedIn && user && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-lime">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{user.name}</div>
                  <div className="text-sm text-gray-400">{user.email}</div>
                </div>
              </div>
              <div className="border-t border-white/10 mb-4" />
            </>
          )}

          {/* Quick Actions (if logged in) */}
          {isLoggedIn && (
            <>
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-2 px-4">Your Account</div>
              <nav className="flex flex-col gap-1 mb-4">
                {userMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 text-gray-300 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-gray-500" />
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 text-lime font-medium py-2.5 px-4 hover:bg-white/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Organizer Dashboard
                </Link>
              </nav>
              <div className="border-t border-white/10 mb-4" />
            </>
          )}

          {/* Navigation Links */}
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-2 px-4">Explore</div>
          <nav className="flex flex-col gap-1">
            <Link
              to="/app"
              className="text-lime font-semibold py-2.5 px-4 hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Open App
            </Link>
            <Link
              to="/discovery"
              className="text-gray-300 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Discovery
            </Link>
            <Link
              to="/communities"
              className="text-gray-300 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Communities
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-300 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className="text-gray-300 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          {/* Divider */}
          <div className="border-t border-white/10 my-4" />

          {/* Auth Actions */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-gray-400 font-medium py-2.5 px-4 hover:bg-white/5 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                to="/auth/login"
                className="text-center text-white font-medium py-3 px-4 border border-white/20 hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/auth/register"
                className="text-center bg-lime text-dark font-bold py-3 px-4 hover:bg-limehover transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Sign Up
              </Link>
            </div>
          )}

          {/* Bottom spacer */}
          <div className="flex-1" />

          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Ticketz Inc.
          </p>
        </div>
      </div>
    </>
  );
}
