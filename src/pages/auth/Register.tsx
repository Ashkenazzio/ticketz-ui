import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [accountType, setAccountType] = useState<'attendee' | 'organizer'>('attendee');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate(accountType === 'organizer' ? '/dashboard' : '/app');
  };

  return (
    <div className="flex h-screen bg-dark text-white font-sans selection:bg-lime selection:text-black">

      {/* Left: Art / Texture */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#111]">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          alt="Art"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-lime/20 to-transparent mix-blend-soft-light"></div>
        <div className="relative z-10 p-12 flex flex-col justify-between h-full">
          <Link to="/" className="font-sans text-3xl font-bold tracking-tight text-white inline-block mb-2">
            ticketz<span className="text-lime">.</span>
          </Link>
          <div>
            <h1 className="font-serif text-6xl font-bold uppercase tracking-tighter leading-none mb-4">
              Join the<br />Movement
            </h1>
            <p className="text-gray-400 max-w-md text-lg">
              Create your account and start discovering events or building your community today.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface overflow-y-auto">
        <div className="w-full max-w-md space-y-8 my-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="font-sans text-2xl font-bold tracking-tight text-white inline-block">
              ticketz<span className="text-lime">.</span>
            </Link>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="font-serif text-4xl font-bold uppercase tracking-tighter text-white">Sign Up</h2>
            <p className="text-gray-400 mt-2">Create your account to get started.</p>
          </div>

          {/* Account Type Selector */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setAccountType('attendee')}
              className={`
                p-4 border text-center transition-all
                ${accountType === 'attendee'
                  ? 'border-lime bg-lime/10 text-lime'
                  : 'border-white/10 text-gray-400 hover:border-white/30'
                }
              `}
            >
              <div className="font-semibold uppercase text-sm tracking-wide mb-1">Attendee</div>
              <div className="text-xs opacity-70">Find & attend events</div>
            </button>
            <button
              onClick={() => setAccountType('organizer')}
              className={`
                p-4 border text-center transition-all
                ${accountType === 'organizer'
                  ? 'border-lime bg-lime/10 text-lime'
                  : 'border-white/10 text-gray-400 hover:border-white/30'
                }
              `}
            >
              <div className="font-semibold uppercase text-sm tracking-wide mb-1">Organizer</div>
              <div className="text-xs opacity-70">Host & manage events</div>
            </button>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase text-gray-500 mb-2 font-bold tracking-wide">First Name</label>
                <input
                  type="text"
                  className="w-full bg-dark border border-white/10 rounded-sm p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                  placeholder="Alex"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-500 mb-2 font-bold tracking-wide">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-dark border border-white/10 rounded-sm p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                  placeholder="Rivera"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase text-gray-500 mb-2 font-bold tracking-wide">Email Address</label>
              <input
                type="email"
                className="w-full bg-dark border border-white/10 rounded-sm p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                placeholder="alex@example.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-gray-500 mb-2 font-bold tracking-wide">Password</label>
              <input
                type="password"
                className="w-full bg-dark border border-white/10 rounded-sm p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                placeholder="••••••••"
              />
              <div className="mt-2 text-xs text-gray-500">
                Minimum 8 characters with at least one number
              </div>
            </div>

            {accountType === 'organizer' && (
              <div>
                <label className="block text-xs uppercase text-gray-500 mb-2 font-bold tracking-wide">Community Name</label>
                <input
                  type="text"
                  className="w-full bg-dark border border-white/10 rounded-sm p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                  placeholder="e.g. Bass Sector"
                />
              </div>
            )}

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="w-5 h-5 border border-white/30 bg-dark flex items-center justify-center mt-0.5 group-hover:border-lime transition-colors">
                <Check className="w-3 h-3 text-lime opacity-0 group-hover:opacity-30" />
              </div>
              <span className="text-sm text-gray-400">
                I agree to the{' '}
                <Link to="#" className="text-white hover:text-lime transition-colors">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-white hover:text-lime transition-colors">Privacy Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full bg-lime text-dark font-sans font-bold uppercase tracking-tight py-4 rounded-sm hover:bg-limehover transition-colors text-center"
            >
              Create Account
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-white font-medium hover:text-lime transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
