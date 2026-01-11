import { Link } from 'react-router-dom';
import { Search, Users, Ticket, QrCode, CalendarPlus, BarChart3, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const attendeeSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Browse communities and events that match your vibe. Filter by location, genre, or date.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Join',
    description: 'Subscribe to communities to get updates on their events. Build your network.',
  },
  {
    number: '03',
    icon: Ticket,
    title: 'Get Tickets',
    description: 'Secure your spot with our seamless checkout. Multiple tiers, instant confirmation.',
  },
  {
    number: '04',
    icon: QrCode,
    title: 'Attend',
    description: 'Show your digital ticket at the door. Fast entry, no paper needed.',
  },
];

const organizerSteps = [
  {
    number: '01',
    icon: Users,
    title: 'Build Community',
    description: 'Create your community profile. Set your vibe, add moderators, grow your following.',
  },
  {
    number: '02',
    icon: CalendarPlus,
    title: 'Create Events',
    description: 'Launch events in minutes. Set multiple ticket tiers, add lineup, choose your venue.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Track & Grow',
    description: 'Real-time analytics on sales, attendance, and community growth.',
  },
];

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '2,500+', label: 'Events Hosted' },
  { value: '500+', label: 'Communities' },
  { value: '98%', label: 'Satisfaction' },
];

export default function HowItWorks() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-lime selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-lime/10 border border-lime/30 px-4 py-2 text-lime text-xs font-semibold uppercase tracking-wider mb-6">
            How It Works
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold uppercase tracking-tighter leading-none mb-6">
            Events Made<br />
            <span className="text-lime">Simple</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're looking for your next experience or building a community,
            Ticketz makes it effortless.
          </p>
        </div>
      </section>

      {/* For Attendees */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tighter mb-4">
              For Attendees
            </h2>
            <p className="text-gray-400">
              Find your people. Never miss an event.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {attendeeSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < attendeeSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-lime/50 to-transparent" />
                )}

                <div className="bg-surface border border-white/5 p-6 h-full hover:border-lime/30 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-lime/10 flex items-center justify-center group-hover:bg-lime group-hover:text-dark transition-colors">
                      <step.icon className="w-6 h-6 text-lime group-hover:text-dark" />
                    </div>
                    <span className="font-mono text-lime text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/discovery"
              className="inline-flex items-center gap-2 bg-lime text-dark px-8 py-4 font-semibold uppercase tracking-wide hover:bg-limehover transition-colors"
            >
              Start Exploring <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Organizers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tighter mb-4">
              For Organizers
            </h2>
            <p className="text-gray-400">
              Build your community. Host unforgettable events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {organizerSteps.map((step) => (
              <div key={step.number} className="bg-surface border border-white/5 p-8 hover:border-lime/30 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-lime/10 flex items-center justify-center group-hover:bg-lime group-hover:text-dark transition-colors">
                    <step.icon className="w-7 h-7 text-lime group-hover:text-dark" />
                  </div>
                  <span className="font-mono text-lime text-lg">{step.number}</span>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/for-organizers"
              className="inline-flex items-center gap-2 border-2 border-lime text-lime px-8 py-4 font-semibold uppercase tracking-wide hover:bg-lime hover:text-dark transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-lime/5 border-y border-lime/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-semibold text-lime mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
            "Ticketz transformed how we run our events. The community features
            helped us grow from 200 to 2,000 regulars in just one year."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
              alt="Sarah Chen"
              className="w-12 h-12 object-cover rounded-full border-2 border-lime"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-gray-400">Founder, Bass Sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-tighter mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of event-goers and organizers already using Ticketz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/auth/register"
              className="w-full sm:w-auto bg-lime text-dark px-8 py-4 font-semibold uppercase tracking-wide hover:bg-limehover transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/discovery"
              className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 font-semibold uppercase tracking-wide hover:border-white hover:bg-white/5 transition-colors"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
