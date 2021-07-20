import React from 'react';
import { render } from '@testing-library/react-native';

import RestaurantScreen from './RestaurantScreen';
import { theme } from '../../infrastructure/theme/index';
import { ThemeProvider } from 'styled-components/native';

it('renders the RestaurantScreen correctly', () => {
   const tree = render(
      <ThemeProvider theme={theme}>
         <RestaurantScreen />
      </ThemeProvider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
});
