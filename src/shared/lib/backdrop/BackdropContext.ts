import { createContext } from 'react';
import type { BackdropContextProps } from './types';

export const BackdropContext = createContext<BackdropContextProps>({
  dispatch: () => {},
});
