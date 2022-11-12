import { createContext, Dispatch, SetStateAction } from 'react';

export type Theme = 'dark' | 'light';

export type ContextContent = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const Context = createContext<ContextContent>({
  theme: 'dark',
  setTheme: () => {}
});
