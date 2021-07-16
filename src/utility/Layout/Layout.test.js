import React from 'react';
import { render } from '@testing-library/react-native';

import Layout from './Layout';

it('renders the Layout correctly', () => {
   const tree = render(<Layout />).toJSON();
   expect(tree).toMatchSnapshot();
});
