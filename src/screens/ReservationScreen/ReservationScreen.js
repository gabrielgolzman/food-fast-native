import React, { useState } from 'react';

import {
   Main,
   TitleContainer,
   Title,
   ReservationFormContainer,
} from './ReservationScreen.styles';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
const ReservationScreen = () => {
   const [reservation, setReservation] = useState(null);

   const onReservationMade = (reservation) => {
      setReservation(reservation);
   };

   return (
      <Layout clean>
         <Main>
            <TitleContainer>
               <Title>¡Realiza tu reserva!</Title>
            </TitleContainer>
            <ReservationFormContainer>
               <ReservationForm onReservationMade={onReservationMade} />
            </ReservationFormContainer>
         </Main>
      </Layout>
   );
};

export default ReservationScreen;
