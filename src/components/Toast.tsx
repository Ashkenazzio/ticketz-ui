import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => removeToast(toast.id), 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast.id, removeToast]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => removeToast(toast.id), 300);
  };

  const config = {
    success: {
      icon: CheckCircle,
      accent: 'bg-lime',
      iconColor: 'text-lime',
      borderColor: 'border-lime/30',
    },
    error: {
      icon: AlertCircle,
      accent: 'bg-red-500',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/30',
    },
    warning: {
      icon: AlertTriangle,
      accent: 'bg-yellow-500',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
    },
    info: {
      icon: Info,
      accent: 'bg-blue-500',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
  }[toast.type];

  const Icon = config.icon;

  return (
    <div
      className={`
        pointer-events-auto bg-surface border ${config.borderColor} shadow-lg
        transform transition-all duration-300 ease-out
        ${isExiting ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
      `}
    >
      {/* Accent bar */}
      <div className={`h-1 ${config.accent}`} />

      <div className="p-4 flex items-start gap-3">
        {/* Icon */}
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white">{toast.message}</p>

          {/* Action button */}
          {toast.action && (
            <button
              onClick={() => {
                toast.action?.onClick();
                handleClose();
              }}
              className={`mt-2 text-xs font-semibold uppercase tracking-wide ${config.iconColor} hover:underline`}
            >
              {toast.action.label}
            </button>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Standalone toast component for display purposes (non-functional)
interface ToastDisplayProps {
  type: ToastType;
  message: string;
  action?: {
    label: string;
  };
}

export function ToastDisplay({ type, message, action }: ToastDisplayProps) {
  const config = {
    success: {
      icon: CheckCircle,
      accent: 'bg-lime',
      iconColor: 'text-lime',
      borderColor: 'border-lime/30',
    },
    error: {
      icon: AlertCircle,
      accent: 'bg-red-500',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/30',
    },
    warning: {
      icon: AlertTriangle,
      accent: 'bg-yellow-500',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
    },
    info: {
      icon: Info,
      accent: 'bg-blue-500',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
  }[type];

  const Icon = config.icon;

  return (
    <div className={`bg-surface border ${config.borderColor} shadow-lg max-w-sm`}>
      <div className={`h-1 ${config.accent}`} />

      <div className="p-4 flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />

        <div className="flex-1 min-w-0">
          <p className="text-sm text-white">{message}</p>

          {action && (
            <button className={`mt-2 text-xs font-semibold uppercase tracking-wide ${config.iconColor} hover:underline`}>
              {action.label}
            </button>
          )}
        </div>

        <button className="text-gray-500 hover:text-white transition-colors flex-shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export type { Toast, ToastType };
