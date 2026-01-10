import { useReducer } from 'react';
import { ToastContext, type ToastAction, type ToastState } from '@shared/lib';
import { Toast } from '@shared/ui';

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  const { type } = action;

  switch (type) {
    case 'open':
      return {
        isOpen: true,
        message: action.payload.message,
        severity: action.payload.severity,
        position: action.payload.position,
        autoHideDuration: action.payload.autoHideDuration,
      };
    case 'close':
      return {
        isOpen: false,
        message: null,
        severity: undefined,
        position: undefined,
        autoHideDuration: undefined,
      };
    default:
      return state;
  }
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isOpen, message, severity, position, autoHideDuration }, dispatch] = useReducer(
    toastReducer,
    {
      isOpen: false,
      message: null,
    },
  );

  const onClose = () => {
    dispatch({
      type: 'close',
    });
  };

  return (
    <ToastContext.Provider value={{ dispatch }}>
      <Toast
        isOpen={isOpen}
        onClose={onClose}
        message={message}
        severity={severity}
        position={position}
        autoHideDuration={autoHideDuration}
      />
      {children}
    </ToastContext.Provider>
  );
};
