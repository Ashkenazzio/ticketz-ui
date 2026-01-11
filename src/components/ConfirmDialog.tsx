import { useEffect, useRef } from 'react';
import { AlertTriangle, Trash2, LogOut, X, LucideIcon } from 'lucide-react';

type DialogVariant = 'danger' | 'warning' | 'info';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: DialogVariant;
  icon?: LucideIcon;
  isLoading?: boolean;
}

const variantConfig: Record<DialogVariant, {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  confirmBg: string;
  confirmHover: string;
}> = {
  danger: {
    icon: Trash2,
    iconBg: 'bg-red-900/50',
    iconColor: 'text-red-400',
    confirmBg: 'bg-red-600',
    confirmHover: 'hover:bg-red-700',
  },
  warning: {
    icon: AlertTriangle,
    iconBg: 'bg-yellow-900/50',
    iconColor: 'text-yellow-400',
    confirmBg: 'bg-yellow-600',
    confirmHover: 'hover:bg-yellow-700',
  },
  info: {
    icon: LogOut,
    iconBg: 'bg-lime/10',
    iconColor: 'text-lime',
    confirmBg: 'bg-lime',
    confirmHover: 'hover:bg-limehover',
  },
};

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
  icon,
  isLoading = false,
}: ConfirmDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const config = variantConfig[variant];
  const Icon = icon || config.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        className="relative bg-surface border border-white/10 w-full max-w-md transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {/* Icon */}
          <div className={`w-12 h-12 ${config.iconBg} flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 ${config.iconColor}`} />
          </div>

          {/* Title */}
          <h2
            id="dialog-title"
            className="font-display text-xl font-semibold uppercase tracking-tight text-white mb-2"
          >
            {title}
          </h2>

          {/* Message */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {message}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 border border-white/20 text-gray-300 px-4 py-3 font-semibold uppercase text-sm tracking-wide hover:border-white/40 hover:text-white transition-colors disabled:opacity-50"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`
                flex-1 px-4 py-3 font-semibold uppercase text-sm tracking-wide transition-colors
                ${config.confirmBg} ${config.confirmHover}
                ${variant === 'info' ? 'text-dark' : 'text-white'}
                disabled:opacity-50
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                confirmLabel
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Common dialog presets
export function DeleteConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
  isLoading?: boolean;
}) {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={`Delete ${itemName}?`}
      message={`This action cannot be undone. Are you sure you want to permanently delete this ${itemName.toLowerCase()}?`}
      confirmLabel="Delete"
      variant="danger"
      icon={Trash2}
      isLoading={isLoading}
    />
  );
}

export function LogoutConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Log Out?"
      message="You'll need to sign in again to access your account."
      confirmLabel="Log Out"
      variant="info"
      icon={LogOut}
    />
  );
}

export type { ConfirmDialogProps, DialogVariant };
