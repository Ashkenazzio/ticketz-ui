import { Link } from 'react-router-dom';
import {
  Users, Calendar, BarChart3, Ticket, QrCode,
  Shield, Zap, Globe, ArrowRight, Check
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: Users,
    title: 'Community Building',
    description: 'Grow your following with dedicated community profiles. Build loyalty beyond single events.',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Create events in minutes with our intuitive wizard. Multiple ticket tiers, custom lineups, flexible scheduling.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track sales velocity, attendance patterns, and community growth with live dashboards.',
  },
  {
    icon: Ticket,
    title: 'Flexible Ticketing',
    description: 'Multiple tiers, early bird pricing, group discounts. Full control over your ticket strategy.',
  },
  {
    icon: QrCode,
    title: 'Mobile Check-In',
    description: 'Scan tickets at the door with our mobile app. Fast entry, real-time attendance tracking.',
  },
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: 'Every ticket is unique and verified. No more counterfeit tickets or duplicate entries.',
  },
];

const benefits = [
  'Unlimited events',
  'Real-time sales dashboard',
  'Mobile ticket scanner',
  'Community management',
  'Export attendee lists',
  'Custom branding',
  'Team access controls',
  'Priority support',
];

const testimonials = [
  {
    quote: "Ticketz helped us grow from 200 regulars to over 2,000 community members in just one year.",
    name: 'Sarah Chen',
    role: 'Founder, Bass Sector',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    quote: "The analytics alone are worth it. We finally understand our audience and can plan events accordingly.",
    name: 'Marcus Johnson',
    role: 'Events Director, Urban Striders',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
];

export default function ForOrganizers() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-lime selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block bg-lime/10 border border-lime/30 px-4 py-2 text-lime text-xs font-semibold uppercase tracking-wider mb-6">
            For Organizers
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold uppercase tracking-tighter leading-none mb-6">
            Build Your<br />
            <span className="text-lime">Community</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Everything you need to create memorable events and grow a loyal following.
            From ticket sales to door management, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/auth/register"
              className="w-full sm:w-auto bg-lime text-dark px-8 py-4 font-semibold uppercase tracking-wide hover:bg-limehover transition-colors flex items-center justify-center gap-2"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 font-semibold uppercase tracking-wide hover:border-lime hover:text-lime transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tighter mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Powerful tools designed specifically for event organizers and community builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-white/5 p-6 hover:border-lime/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-lime/10 flex items-center justify-center mb-4 group-hover:bg-lime group-hover:text-dark transition-colors">
                  <feature.icon className="w-6 h-6 text-lime group-hover:text-dark" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tighter mb-6">
                Focus on Your Events,<br />
                <span className="text-lime">We Handle the Rest</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Stop juggling multiple tools and spreadsheets. Ticketz brings everything
                together in one platform so you can focus on what matters — creating
                amazing experiences for your community.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-lime/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-lime" />
                    </div>
                    <span className="text-sm text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview Mock */}
            <div className="relative">
              <div className="bg-surface border border-white/10 p-4 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="bg-dark p-4">
                    <div className="text-xs text-gray-500 uppercase mb-1">Total Revenue</div>
                    <div className="text-2xl font-display font-semibold text-lime">$24,580</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-dark p-3">
                      <div className="text-xs text-gray-500 uppercase mb-1">Events</div>
                      <div className="text-lg font-semibold">12</div>
                    </div>
                    <div className="bg-dark p-3">
                      <div className="text-xs text-gray-500 uppercase mb-1">Tickets</div>
                      <div className="text-lg font-semibold">847</div>
                    </div>
                    <div className="bg-dark p-3">
                      <div className="text-xs text-gray-500 uppercase mb-1">Members</div>
                      <div className="text-lg font-semibold">2.5k</div>
                    </div>
                  </div>
                  <div className="h-24 bg-dark flex items-end gap-1 p-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-lime/30" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-lime/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-lime/5 border-y border-lime/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tighter">
              Trusted by Organizers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-surface border border-white/5 p-8">
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full border-2 border-lime"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-lime" />
            <Globe className="w-8 h-8 text-lime" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-tighter mb-6">
            Ready to Launch?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of organizers already using Ticketz to power their events.
            Get started in minutes.
          </p>
          <Link
            to="/auth/register"
            className="inline-flex items-center gap-2 bg-lime text-dark px-10 py-5 font-semibold uppercase tracking-wide text-lg hover:bg-limehover transition-colors"
          >
            Create Your Community <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Free to start. No credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
