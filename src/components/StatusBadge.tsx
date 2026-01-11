// Badge status values
export const BADGE_STATUSES = [
  'valid',
  'used',
  'transferred',
  'expired',
  'pending',
  'approved',
  'cancelled',
  'draft',
  'published',
  'sold-out',
] as const;

export type BadgeStatus = typeof BADGE_STATUSES[number];

export interface StatusBadgeProps {
  status: BadgeStatus;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const statusStyles: Record<BadgeStatus, string> = {
  valid: 'bg-lime text-dark',
  used: 'bg-gray-600 text-gray-300 line-through',
  transferred: 'border-2 border-lime text-lime bg-transparent',
  expired: 'bg-red-900 text-red-300',
  pending: 'bg-yellow-600 text-dark',
  approved: 'bg-lime text-dark',
  cancelled: 'bg-red-900 text-red-300 line-through',
  draft: 'bg-gray-700 text-gray-300',
  published: 'bg-lime text-dark',
  'sold-out': 'bg-red-600 text-white',
};

const statusLabels: Record<BadgeStatus, string> = {
  valid: 'VALID',
  used: 'USED',
  transferred: 'TRANSFERRED',
  expired: 'EXPIRED',
  pending: 'PENDING',
  approved: 'APPROVED',
  cancelled: 'CANCELLED',
  draft: 'DRAFT',
  published: 'PUBLISHED',
  'sold-out': 'SOLD OUT',
};

const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

export default function StatusBadge({ status, size = 'md', className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-bold uppercase tracking-wide
        ${statusStyles[status]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {statusLabels[status]}
    </span>
  );
}
