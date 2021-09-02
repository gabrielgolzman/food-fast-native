import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { ReservationsContext } from '../../services/reservation/reservations.context';

const ReservationResumeScreen = () => {
   const { reservations } = useContext(ReservationsContext);
   console.log(reservations);
   return (
      <View>
         <Text>Usted realizó una reserva para el día</Text>
         {/* <Text>{reservation.selectedDate}</Text> */}
      </View>
   );
};

export default ReservationResumeScreen;
