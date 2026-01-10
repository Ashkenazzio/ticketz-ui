import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo */}
                <Link to="/" className="font-sans text-2xl font-bold tracking-tight">
                    ticketz<span className="text-lime">.</span>
                </Link>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                    <Link to="/app" className="text-lime hover:text-limehover transition-colors">Open App</Link>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs sm:text-sm">
                    © {new Date().getFullYear()} Ticketz Inc.
                </div>
            </div>
        </div>
    </footer>
  );
}
