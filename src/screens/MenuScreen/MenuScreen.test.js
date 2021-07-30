import React from 'react';
import { render } from '@testing-library/react-native';

import MenuScreen from './MenuScreen';
import { theme } from '../../infrastructure/theme/index';
import { ThemeProvider } from 'styled-components/native';

it('renders the MenuScreen correctly', () => {
   const tree = render(
      <ThemeProvider theme={theme}>
         <MenuScreen />
      </ThemeProvider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
});
