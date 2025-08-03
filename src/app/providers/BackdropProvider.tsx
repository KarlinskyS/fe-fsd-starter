import { useReducer } from 'react';
import { BackdropContext, type BackdropAction, type BackdropState } from '@shared/lib';
import { BackdropProgress } from '@shared/ui';

function backdropReducer(state: BackdropState, action: BackdropAction) {
  const { type } = action;

  switch (type) {
    case 'open':
      return { ...state, isOpen: true, customMessage: action.customMessage };
    case 'close':
      return { ...state, isOpen: false, customMessage: null };
    default:
      return state;
  }
}

export const BackdropProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isOpen, customMessage }, dispatch] = useReducer(backdropReducer, { isOpen: false });

  return (
    <BackdropContext.Provider value={{ dispatch }}>
      <BackdropProgress open={isOpen} customMessage={customMessage} />
      {children}
    </BackdropContext.Provider>
  );
};
