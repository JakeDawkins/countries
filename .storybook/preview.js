import '../globals.css';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
