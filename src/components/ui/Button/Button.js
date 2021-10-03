import React from 'react';

import {
   IconAndButton,
   MainButton,
   LargeButton,
   GoBackButton,
   StickyButton,
   EditButton,
} from './Button.styles';

const Button = ({ children, type, onPress, variation, disabled, icon }) => {
   switch (type) {
      case 'icon':
         return (
            <IconAndButton icon={icon} style={variation} onPress={onPress}>
               {children}
            </IconAndButton>
         );
      case 'large':
         return (
            <LargeButton
               disabled={disabled}
               style={variation}
               onPress={onPress}
               icon={icon}
            >
               {children}
            </LargeButton>
         );
      case 'main':
         return (
            <MainButton
               disabled={disabled}
               style={variation}
               onPress={onPress}
               icon={icon}
            >
               {children}
            </MainButton>
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
