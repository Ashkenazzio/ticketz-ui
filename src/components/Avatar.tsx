import { useState } from 'react';
import { User } from 'lucide-react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
  showBorder?: boolean;
  borderColor?: 'white' | 'lime' | 'surface';
}

const sizeConfig: Record<AvatarSize, { container: string; icon: string; text: string }> = {
  xs: { container: 'w-6 h-6', icon: 'w-3 h-3', text: 'text-[10px]' },
  sm: { container: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-xs' },
  md: { container: 'w-10 h-10', icon: 'w-5 h-5', text: 'text-sm' },
  lg: { container: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-base' },
  xl: { container: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-lg' },
};

const borderConfig: Record<string, string> = {
  white: 'border-2 border-white/20',
  lime: 'border-2 border-lime',
  surface: 'border-2 border-surface',
};

// Generate initials from name
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

// Generate a consistent color based on name
function getColorFromName(name: string): string {
  const colors = [
    'bg-lime/20 text-lime',
    'bg-blue-500/20 text-blue-400',
    'bg-purple-500/20 text-purple-400',
    'bg-pink-500/20 text-pink-400',
    'bg-orange-500/20 text-orange-400',
    'bg-teal-500/20 text-teal-400',
    'bg-indigo-500/20 text-indigo-400',
    'bg-rose-500/20 text-rose-400',
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}

export default function Avatar({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  showBorder = false,
  borderColor = 'white',
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const config = sizeConfig[size];
  const border = showBorder ? borderConfig[borderColor] : '';

  const baseClasses = `${config.container} flex-shrink-0 overflow-hidden ${border} ${className}`;

  // Show image if src is provided and hasn't errored
  if (src && !hasError) {
    return (
      <div className={baseClasses}>
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // Show initials if name is provided
  if (name) {
    const initials = getInitials(name);
    const colorClasses = getColorFromName(name);

    return (
      <div className={`${baseClasses} ${colorClasses} flex items-center justify-center`}>
        <span className={`${config.text} font-semibold`}>{initials}</span>
      </div>
    );
  }

  // Fallback to icon
  return (
    <div className={`${baseClasses} bg-surface flex items-center justify-center`}>
      <User className={`${config.icon} text-gray-500`} />
    </div>
  );
}

// Avatar group for showing multiple avatars
interface AvatarGroupProps {
  avatars: Array<{ src?: string; name?: string }>;
  max?: number;
  size?: AvatarSize;
}

export function AvatarGroup({ avatars, max = 4, size = 'sm' }: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;
  const config = sizeConfig[size];

  return (
    <div className="flex -space-x-2">
      {visible.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          name={avatar.name}
          size={size}
          showBorder
          borderColor="surface"
        />
      ))}
      {remaining > 0 && (
        <div
          className={`${config.container} bg-surface border-2 border-surface flex items-center justify-center`}
        >
          <span className={`${config.text} text-gray-400 font-semibold`}>+{remaining}</span>
        </div>
      )}
    </div>
  );
}

export type { AvatarProps, AvatarSize };
