interface SkeletonProps {
  className?: string;
}

// Base skeleton with pulse animation
function SkeletonBase({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`bg-surface animate-pulse ${className}`}
      style={{ animationDuration: '1.5s' }}
    />
  );
}

// Card skeleton - for event cards, ticket cards, etc.
export function SkeletonCard() {
  return (
    <div className="bg-surface border border-white/5 overflow-hidden">
      {/* Lime accent bar */}
      <div className="h-1 bg-lime/30" />

      {/* Image placeholder */}
      <SkeletonBase className="h-48 w-full" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <SkeletonBase className="h-5 w-3/4" />

        {/* Subtitle */}
        <SkeletonBase className="h-4 w-1/2" />

        {/* Meta info */}
        <div className="flex gap-4 pt-2">
          <SkeletonBase className="h-3 w-20" />
          <SkeletonBase className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}

// Ticket card skeleton
export function SkeletonTicketCard() {
  return (
    <div className="bg-surface border border-white/5 overflow-hidden">
      {/* Lime accent bar */}
      <div className="h-1 bg-lime/30" />

      <div className="flex">
        {/* Image */}
        <SkeletonBase className="w-28 h-36 flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 p-4 space-y-3">
          <div className="flex justify-between">
            <SkeletonBase className="h-5 w-2/3" />
            <SkeletonBase className="h-5 w-16" />
          </div>
          <SkeletonBase className="h-3 w-1/2" />
          <SkeletonBase className="h-3 w-1/3" />
          <div className="flex justify-between pt-2">
            <SkeletonBase className="h-3 w-16" />
            <SkeletonBase className="h-3 w-20" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 py-2 bg-dark/50">
        <SkeletonBase className="h-3 w-24" />
      </div>
    </div>
  );
}

// Order card skeleton
export function SkeletonOrderCard() {
  return (
    <div className="bg-surface border border-white/5 overflow-hidden">
      <div className="h-1 bg-lime/30" />

      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Image */}
          <SkeletonBase className="w-20 h-20 flex-shrink-0" />

          {/* Content */}
          <div className="flex-1 space-y-2">
            <div className="flex justify-between">
              <SkeletonBase className="h-5 w-1/2" />
              <SkeletonBase className="h-5 w-20" />
            </div>
            <SkeletonBase className="h-3 w-1/3" />
            <SkeletonBase className="h-3 w-1/4" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
          <SkeletonBase className="h-6 w-24" />
          <SkeletonBase className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

// Table row skeleton
export function SkeletonTableRow({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="border-b border-white/5">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-4">
          <SkeletonBase className="h-4 w-full max-w-[120px]" />
        </td>
      ))}
    </tr>
  );
}

// Table skeleton
export function SkeletonTable({ rows = 5, columns = 5 }: { rows?: number; columns?: number }) {
  return (
    <div className="bg-surface border border-white/5 overflow-hidden">
      <div className="h-1 bg-lime/30" />
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-4 py-3 text-left">
                <SkeletonBase className="h-3 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <SkeletonTableRow key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Profile skeleton
export function SkeletonProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <SkeletonBase className="w-20 h-20 rounded-full" />
        <div className="space-y-2">
          <SkeletonBase className="h-6 w-40" />
          <SkeletonBase className="h-4 w-24" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-surface border border-white/5 p-4">
            <SkeletonBase className="h-8 w-16 mb-2" />
            <SkeletonBase className="h-3 w-20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-surface border border-white/5 p-6 space-y-4">
        <SkeletonBase className="h-5 w-32" />
        <SkeletonBase className="h-4 w-full" />
        <SkeletonBase className="h-4 w-3/4" />
        <SkeletonBase className="h-4 w-1/2" />
      </div>
    </div>
  );
}

// Community card skeleton
export function SkeletonCommunityCard() {
  return (
    <div className="bg-surface border border-white/5 overflow-hidden">
      <div className="h-1 bg-lime/30" />

      {/* Cover */}
      <SkeletonBase className="h-24 w-full" />

      {/* Content */}
      <div className="p-4 pt-0 -mt-8 relative">
        {/* Avatar */}
        <SkeletonBase className="w-16 h-16 border-4 border-surface mb-3" />

        <SkeletonBase className="h-5 w-2/3 mb-2" />
        <SkeletonBase className="h-3 w-full mb-1" />
        <SkeletonBase className="h-3 w-3/4 mb-4" />

        {/* Stats */}
        <div className="flex gap-4">
          <SkeletonBase className="h-3 w-20" />
          <SkeletonBase className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

// Stats card skeleton
export function SkeletonStatsCard() {
  return (
    <div className="bg-surface border border-white/5 p-6">
      <div className="flex items-start justify-between mb-3">
        <SkeletonBase className="w-10 h-10" />
        <SkeletonBase className="h-4 w-12" />
      </div>
      <SkeletonBase className="h-8 w-24 mb-1" />
      <SkeletonBase className="h-3 w-20" />
    </div>
  );
}

// Grid of skeleton cards
export function SkeletonCardGrid({ count = 6, variant = 'card' }: { count?: number; variant?: 'card' | 'ticket' | 'order' | 'community' }) {
  const SkeletonComponent = {
    card: SkeletonCard,
    ticket: SkeletonTicketCard,
    order: SkeletonOrderCard,
    community: SkeletonCommunityCard,
  }[variant];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}

// Default export
export default SkeletonBase;
