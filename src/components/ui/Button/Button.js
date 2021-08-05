import React from 'react';

import {
   HelpButton,
   LargeButton,
   GoBackButton,
   StickyButton,
} from './Button.styles';

const Button = ({ children, type, onPress }) => {
   switch (type) {
      case 'help':
         return <HelpButton onPress={onPress}>{children}</HelpButton>;
      case 'large':
         return <LargeButton onPress={onPress}>{children}</LargeButton>;
      case 'goBack':
         return <GoBackButton onPress={onPress} />;
      case 'sticky':
         return <StickyButton onPress={onPress}>{children}</StickyButton>;
      default:
         break;
   }
};

export default Button;
