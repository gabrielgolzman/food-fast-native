import React from 'react';

import { HelpButton, LargeButton } from './Button.styles';
const Button = ({ children, type, onPress }) => {
   switch (type) {
      case 'help':
         return <HelpButton onPress={onPress}>{children}</HelpButton>;
      case 'large':
         return <LargeButton onPress={onPress}>{children}</LargeButton>;
      default:
         break;
   }
};

export default Button;
