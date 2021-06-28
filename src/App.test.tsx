import { render, screen } from '@testing-library/react';

import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import store from './store'
import { Provider } from 'react-redux'
import 'jest-canvas-mock'
const client = new QueryClient();

describe('App', () => {
   const queryClient = new QueryClient();
    it('renders without crashing', () => {
        render(
          <QueryClientProvider client={client}>
              <Provider store={store}>
                 <App />
              </Provider>
          </QueryClientProvider>
        );

        expect(screen.getByRole('img', { name: "Star" })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: "Wars" })).toBeInTheDocument();
    });
});
