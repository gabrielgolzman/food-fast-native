import React from 'react';

import { MinusButton, Quantity, PlusButton } from './QuantityHandler.styles';
const QuantityHandler = ({
   currentQuantity,
   onMinusPressed,
   onPlusPressed,
}) => {
   const minusPressedHandler = () => {
      currentQuantity--;
      onMinusPressed(currentQuantity);
   };
   const plusPressedHandler = () => {
      currentQuantity++;
      onPlusPressed(currentQuantity);
   };

   return (
      <>
         <MinusButton
            disabled={currentQuantity === 1}
            onPress={minusPressedHandler}
         />
         <Quantity>{currentQuantity}</Quantity>
         <PlusButton onPress={plusPressedHandler} />
      </>
   );
};

export default QuantityHandler;
