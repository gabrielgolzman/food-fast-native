import React from 'react';
import { render } from '@testing-library/react-native';

import MenuScreen from './MenuScreen';
import { theme } from '../../infrastructure/theme/index';
import { ThemeProvider } from 'styled-components/native';
import { OrdersContext } from '../../services/orders/orders.context';

it('renders the MenuScreen correctly', () => {
   const tree = render(
      <ThemeProvider theme={theme}>
         <OrdersContext.Provider
            value={{
               orders: [
                  {
                     optionName: 'test',
                     quantity: 1,
                     unitPrice: 100,
                     partialPrice: 100,
                     clarifications: 'Therefore I am',
                  },
               ],
            }}
         >
            <MenuScreen />
         </OrdersContext.Provider>
      </ThemeProvider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
});
