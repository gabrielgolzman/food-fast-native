import React from 'react';

import {
   HelpButton,
   LargeButton,
   GoBackButton,
   StickyButton,
   EditButton,
} from './Button.styles';

const Button = ({ children, type, onPress, variation }) => {
   switch (type) {
      case 'help':
         return <HelpButton onPress={onPress}>{children}</HelpButton>;
      case 'large':
         return (
            <LargeButton style={variation} onPress={onPress}>
               {children}
            </LargeButton>
         );

      case 'goBack':
         return <GoBackButton onPress={onPress} />;
      case 'sticky':
         return <StickyButton onPress={onPress}>{children}</StickyButton>;
      case 'edit':
         return <EditButton onPress={onPress}>{children}</EditButton>;
      default:
         break;
   }
};

export default Button;
