import { toast as toastify } from 'react-toastify';

const TOAST_CONFIG = {
  theme: 'colored',
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
} as const;

interface ToastParams {
  type: 'success' | 'error';
  message: string;
}
export function toast({ type, message }: ToastParams) {
  switch (type) {
    case 'success':
      toastify.success(message, TOAST_CONFIG);
      break;
    case 'error':
      toastify.error(message, TOAST_CONFIG);
      break;

    default:
      break;
  }
}
