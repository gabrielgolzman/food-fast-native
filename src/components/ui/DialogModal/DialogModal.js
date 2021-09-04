import React, { useContext } from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

import { ReservationsContext } from '../../../services/reservation/reservations.context';
import { colors } from '../../../infrastructure/theme/colors';
import { ReservationText } from './DialogModal.styles';

const DialogModal = ({ currentRes, visible, hideDialog, type, nav }) => {
   const { addReservation } = useContext(ReservationsContext);

   let { monthsNames } = require('../../../../data/constants.json');

   const reservationMade = () => {
      addReservation(currentRes);
      console.log(currentRes);
      nav.navigate('reservation-resume', { reservationString });
   };

   const reservationString =
      currentRes &&
      currentRes.selectedDate.day +
         ' de ' +
         monthsNames[currentRes.selectedDate.month - 1] +
         ' de ' +
         currentRes.selectedDate.year +
         ' a las ' +
         currentRes.selectedTime +
         ' horas para ' +
         currentRes.selectedCapacity +
         ' personas';

   return (
      <Portal>
         <Dialog visible={visible} onDismiss={hideDialog}>
            {type === 'help' && (
               <>
                  <Dialog.Title>
                     El personal fue notificado y se pondrá en contacto con
                     usted en la brevedad
                  </Dialog.Title>
                  <Dialog.Actions>
                     <Button color={colors.ui.primary} onPress={hideDialog}>
                        Volver
                     </Button>
                  </Dialog.Actions>
               </>
            )}
            {type === 'reservation' && (
               <>
                  <Dialog.Title>
                     ¿Está seguro que desea realizar la siguiente reserva?
                  </Dialog.Title>
                  <ReservationText>{reservationString}</ReservationText>
                  <Dialog.Actions>
                     <Button color={colors.ui.secondary} onPress={hideDialog}>
                        Volver
                     </Button>
                     <Button
                        color={colors.ui.primary}
                        onPress={reservationMade}
                     >
                        Reservar
                     </Button>
                  </Dialog.Actions>
               </>
            )}
         </Dialog>
      </Portal>
   );
};

export default DialogModal;
