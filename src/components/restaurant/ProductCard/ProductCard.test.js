import React from 'react';
import { render } from '@testing-library/react-native';

import { theme } from '../../../infrastructure/theme/index';
import { ThemeProvider } from 'styled-components/native';
import ProductCard from './ProductCard';

it('renders the ProductCard correctly', () => {
   let mock = require('../../../../data/mock.json');
   const tree = render(
      <ThemeProvider theme={theme}>
         <ProductCard product={mock.menuOptions[0]} />
      </ThemeProvider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
});
