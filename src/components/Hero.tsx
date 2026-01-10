import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src={`${BASE}event-images/techno-gathering-2.jpg`}
                alt="Background"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 relative z-10 pt-16 sm:pt-20">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-bold text-white leading-[1] sm:leading-[0.95] tracking-tight">
                Not Just <br className="hidden sm:block" />
                <span className="text-lime italic">Attendance.</span>
                <br className="sm:hidden" />
                Belonging.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto font-sans leading-relaxed px-2">
                The city isn't just a place you live; it's a pulse you feel. From underground techno bunkers to sunrise run clubs, we curate the moments that define your week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
                <Link
                    to="/app"
                    className="bg-lime text-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-limehover transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                    Open App <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                    to="/discovery"
                    className="border border-white/30 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                    Explore Events
                </Link>
            </div>
        </div>
    </section>
  );
}