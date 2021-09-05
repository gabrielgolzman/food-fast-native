import React, { useContext } from 'react';

import { ReservationsContext } from '../../../services/reservation/reservations.context';
import {
   ReservationCardWhole,
   ReservationText,
   ReservationList,
   ReservationCardContent,
   ReservationAlterContainer,
   ReservationAlterText,
} from './ReservationListScreen.styles';
import { colors } from '../../../infrastructure/theme/colors';

import Layout from '../../../utility/Layout/Layout';
import { FadeInView } from '../../../utility/animations/FadeAnimation';
import Button from '../../../components/ui/Button/Button';

const ReservationListScreen = ({ navigation }) => {
   const { reservations, removeReservation } = useContext(ReservationsContext);
   let { monthsNames } = require('../../../../data/constants.json');

   const onDeletePressed = (reservationIndex) => {
      removeReservation(reservationIndex);
   };

   const reservationList =
      reservations.length === 0 ? (
         <ReservationAlterContainer>
            <ReservationAlterText>
               No posee reservas realizadas
            </ReservationAlterText>
         </ReservationAlterContainer>
      ) : (
         <ReservationList
            data={reservations}
            renderItem={({ item, index }) => {
               return (
                  <FadeInView>
                     <ReservationCardWhole elevation={3}>
                        <ReservationCardContent>
                           <ReservationText>
                              {item.selectedDate.day +
                                 ' de ' +
                                 monthsNames[item.selectedDate.month - 1] +
                                 ' de ' +
                                 item.selectedDate.year +
                                 ' a las ' +
                                 item.selectedTime +
                                 ' horas para ' +
                                 item.selectedCapacity +
                                 ' personas'}
                           </ReservationText>
                           <Button
                              type="large"
                              onPress={() => onDeletePressed(index)}
                              variation={{
                                 width: '35%',
                                 backgroundColor: colors.ui.delete,
                              }}
                           >
                              Borrar
                           </Button>
                        </ReservationCardContent>
                     </ReservationCardWhole>
                  </FadeInView>
               );
            }}
            keyExtractor={(item) =>
               item.selectedCapacity.toString() +
               item.selectedTime.toString() +
               item.selectedDate.day.toString()
            }
         />
      );

   return (
      <Layout clean>
         {reservationList}
         <Button
            onPress={() => navigation.navigate('main')}
            variation={{
               width: '35%',
               backgroundColor: colors.ui.secondary,
            }}
            type="large"
         >
            Volver
         </Button>
      </Layout>
   );
};

export default ReservationListScreen;
