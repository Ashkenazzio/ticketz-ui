import { Link } from 'react-router-dom';
import { ChevronRight, Receipt, Calendar } from 'lucide-react';
import type { BadgeStatus } from './StatusBadge';
import StatusBadge from './StatusBadge';

interface OrderCardProps {
  id: string;
  eventName: string;
  eventImage: string;
  orderDate: string;
  ticketCount: number;
  total: string;
  status: BadgeStatus;
}

export default function OrderCard({
  id,
  eventName,
  eventImage,
  orderDate,
  ticketCount,
  total,
  status,
}: OrderCardProps) {
  return (
    <Link
      to={`/orders/${id}`}
      className="block bg-surface border border-white/5 hover:border-lime/30 transition-all group"
    >
      <div className="flex items-stretch">
        {/* Event Image */}
        <div className="w-20 h-24 flex-shrink-0 overflow-hidden">
          <img
            src={eventImage}
            alt={eventName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Order Info */}
        <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-white truncate">
                {eventName}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                <Calendar className="w-3 h-3" />
                <span>{orderDate}</span>
              </div>
            </div>
            <StatusBadge status={status} size="sm" />
          </div>

          <div className="flex items-end justify-between mt-2">
            <div className="text-xs text-gray-400">
              {ticketCount} {ticketCount === 1 ? 'ticket' : 'tickets'}
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white">{total}</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-4 border-l border-white/5 group-hover:border-lime/20 transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-lime transition-colors" />
        </div>
      </div>

      {/* Order ID Footer */}
      <div className="px-4 py-2 border-t border-white/5 bg-dark/30 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Receipt className="w-3 h-3" />
          <span className="font-mono">Order #{id}</span>
        </div>
        <span className="text-xs text-gray-500 group-hover:text-lime transition-colors">
          View Details
        </span>
      </div>
    </Link>
  );
}

export type { OrderCardProps };
