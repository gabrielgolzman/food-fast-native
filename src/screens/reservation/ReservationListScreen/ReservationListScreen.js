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
      console.log(reservationIndex);
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
            renderItem={({ item }) => {
               const dateParsed = new Date(item.dateAndHour);
               return (
                  <FadeInView>
                     <ReservationCardWhole elevation={3}>
                        <ReservationCardContent>
                           <ReservationText>
                              {dateParsed.getDate('es-AR', {
                                 day: '2-digit',
                              }) +
                                 ' de ' +
                                 monthsNames[dateParsed.getMonth() - 1] +
                                 ' de ' +
                                 dateParsed.getFullYear() +
                                 ' a las ' +
                                 dateParsed.getHours() +
                                 ' horas para ' +
                                 item.qtyPersons +
                                 ' personas'}
                           </ReservationText>
                           <Button
                              type="large"
                              onPress={() => onDeletePressed(item._id)}
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
               item.qtyPersons.toString() + item.dateAndHour.toString()
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
