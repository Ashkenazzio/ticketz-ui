import { Link } from 'react-router-dom';
import {
  Ticket, ShoppingBag, Users, Calendar, Heart, Search,
  FolderOpen, UserX, AlertCircle, LucideIcon
} from 'lucide-react';

type EmptyStateVariant =
  | 'no-tickets'
  | 'no-orders'
  | 'no-communities'
  | 'no-events'
  | 'no-saved'
  | 'no-results'
  | 'no-members'
  | 'no-guests'
  | 'error';

interface EmptyStateProps {
  variant: EmptyStateVariant;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

const variantConfig: Record<EmptyStateVariant, {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}> = {
  'no-tickets': {
    icon: Ticket,
    title: 'No Tickets Yet',
    description: 'Your ticket wallet is empty. Discover events and grab your first ticket.',
    actionLabel: 'Explore Events',
    actionHref: '/discover',
  },
  'no-orders': {
    icon: ShoppingBag,
    title: 'No Orders Yet',
    description: 'You haven\'t made any purchases yet. Start exploring events.',
    actionLabel: 'Start Exploring',
    actionHref: '/discover',
  },
  'no-communities': {
    icon: Users,
    title: 'No Communities',
    description: 'You haven\'t joined any communities yet. Find your people.',
    actionLabel: 'Find Communities',
    actionHref: '/communities',
  },
  'no-events': {
    icon: Calendar,
    title: 'No Events Yet',
    description: 'Create your first event and start building your community.',
    actionLabel: 'Create Event',
    actionHref: '/dashboard/events/new',
  },
  'no-saved': {
    icon: Heart,
    title: 'No Saved Events',
    description: 'Save events you\'re interested in to find them later.',
    actionLabel: 'Discover Events',
    actionHref: '/discover',
  },
  'no-results': {
    icon: Search,
    title: 'No Results Found',
    description: 'Try adjusting your search or filter criteria.',
    actionLabel: 'Clear Filters',
    actionHref: '#',
  },
  'no-members': {
    icon: UserX,
    title: 'No Members Yet',
    description: 'Your community is waiting for its first members. Share your events!',
    actionLabel: 'Create Event',
    actionHref: '/dashboard/events/new',
  },
  'no-guests': {
    icon: FolderOpen,
    title: 'No Guests Yet',
    description: 'No one has purchased tickets for this event yet.',
    actionLabel: 'View Event',
    actionHref: '#',
  },
  'error': {
    icon: AlertCircle,
    title: 'Something Went Wrong',
    description: 'We couldn\'t load this content. Please try again.',
    actionLabel: 'Try Again',
    actionHref: '#',
  },
};

export default function EmptyState({
  variant,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalActionLabel = actionLabel || config.actionLabel;
  const finalActionHref = actionHref || config.actionHref;

  const ActionButton = () => {
    const buttonClasses = "bg-lime text-dark px-6 py-3 font-semibold uppercase text-sm tracking-wide hover:bg-limehover transition-colors";

    if (onAction) {
      return (
        <button onClick={onAction} className={buttonClasses}>
          {finalActionLabel}
        </button>
      );
    }

    if (finalActionHref === '#') {
      return (
        <button className={buttonClasses}>
          {finalActionLabel}
        </button>
      );
    }

    return (
      <Link to={finalActionHref} className={buttonClasses}>
        {finalActionLabel}
      </Link>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="bg-surface border-2 border-lime/30 p-8 sm:p-12 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-lime/10 flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-lime" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight text-white mb-3">
          {finalTitle}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {finalDescription}
        </p>

        {/* Action Button */}
        <ActionButton />
      </div>
    </div>
  );
}

export type { EmptyStateVariant, EmptyStateProps };
