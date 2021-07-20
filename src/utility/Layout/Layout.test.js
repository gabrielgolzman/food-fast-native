import React from 'react';
import { render } from '@testing-library/react-native';

import Layout from './Layout';
import { theme } from '../../infrastructure/theme/index';
import { ThemeProvider } from 'styled-components/native';

it('renders the Layout correctly', () => {
   const tree = render(
      <ThemeProvider theme={theme}>
         <Layout />
      </ThemeProvider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
});
