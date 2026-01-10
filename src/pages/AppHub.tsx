import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Ticket, Users, Calendar, Search, ArrowRight, Sparkles } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const quickActions = [
    {
        title: 'My Tickets',
        desc: 'View your purchased tickets and upcoming events',
        icon: Ticket,
        path: '/app/tickets',
        color: 'lime'
    },
    {
        title: 'Communities',
        desc: 'Discover and join communities that match your vibe',
        icon: Users,
        path: '/communities',
        color: 'white'
    },
    {
        title: 'Explore Events',
        desc: 'Find your next unforgettable experience',
        icon: Calendar,
        path: '/discovery',
        color: 'white'
    },
];

const featuredCommunities = [
    {
        id: 1,
        name: 'Bass Sector',
        members: '12.5k',
        image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=400&auto=format&fit=crop',
        tag: 'Techno'
    },
    {
        id: 2,
        name: 'Urban Striders',
        members: '8.2k',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop',
        tag: 'Running'
    },
    {
        id: 3,
        name: 'JS Collective',
        members: '5.1k',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
        tag: 'Tech'
    },
];

const upcomingTickets = [
    {
        id: 1,
        event: 'Electric Garden',
        date: 'Nov 12',
        time: '12:00 PM',
        venue: 'The Conservatory',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 2,
        event: 'Neon Sunrise 5K',
        date: 'Oct 24',
        time: '06:00 AM',
        venue: 'City Park',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400&auto=format&fit=crop'
    },
];

export default function AppHub() {
    return (
        <div className="bg-dark min-h-screen text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-20 md:pt-24 pb-8 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search events, communities, or tickets..."
                            className="w-full bg-surface border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime/50 transition-colors"
                        />
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                        {quickActions.map((action) => (
                            <Link
                                key={action.title}
                                to={action.path}
                                className="group bg-surface border border-white/10 rounded-lg p-5 hover:border-lime/30 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                                    action.color === 'lime' ? 'bg-lime/10' : 'bg-white/5'
                                }`}>
                                    <action.icon className={`w-6 h-6 ${
                                        action.color === 'lime' ? 'text-lime' : 'text-gray-400 group-hover:text-white'
                                    }`} />
                                </div>
                                <h3 className="font-semibold text-white mb-1 group-hover:text-lime transition-colors">{action.title}</h3>
                                <p className="text-sm text-gray-500">{action.desc}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Upcoming Tickets */}
                    {upcomingTickets.length > 0 && (
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-display text-2xl font-semibold uppercase tracking-tight">Your Tickets</h2>
                                <Link to="/app/tickets" className="text-sm text-lime hover:text-white transition-colors flex items-center gap-1">
                                    View All <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {upcomingTickets.map((ticket) => (
                                    <Link
                                        key={ticket.id}
                                        to={`/event/${ticket.id}`}
                                        className="group flex gap-4 bg-surface border border-white/10 rounded-lg p-4 hover:border-lime/30 transition-all"
                                    >
                                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={ticket.image} alt={ticket.event} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-white truncate group-hover:text-lime transition-colors">{ticket.event}</h3>
                                            <p className="text-sm text-lime font-mono">{ticket.date} • {ticket.time}</p>
                                            <p className="text-sm text-gray-500 truncate">{ticket.venue}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center">
                                                <Ticket className="w-4 h-4 text-lime" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Featured Communities */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-lime" />
                                <h2 className="font-display text-2xl font-semibold uppercase tracking-tight">Communities For You</h2>
                            </div>
                            <Link to="/communities" className="text-sm text-lime hover:text-white transition-colors flex items-center gap-1">
                                Browse All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {featuredCommunities.map((community) => (
                                <Link
                                    key={community.id}
                                    to={`/community/${community.id}`}
                                    className="group relative aspect-[4/3] rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={community.image}
                                        alt={community.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <span className="inline-block bg-lime/20 text-lime text-xs font-medium px-2 py-1 rounded mb-2">{community.tag}</span>
                                        <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-white group-hover:text-lime transition-colors">{community.name}</h3>
                                        <p className="text-sm text-gray-400 flex items-center gap-1">
                                            <Users className="w-3 h-3" /> {community.members} members
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
