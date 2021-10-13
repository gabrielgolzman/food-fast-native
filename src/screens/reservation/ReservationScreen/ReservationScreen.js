import React, { useState } from 'react';

import {
   Main,
   TitleContainer,
   Title,
   ReservationFormContainer,
} from './ReservationScreen.styles';

import Layout from '../../../utility/Layout/Layout';
import ReservationForm from '../../../components/ReservationForm/ReservationForm';
import DialogModal from '../../../components/ui/DialogModal/DialogModal';
const ReservationScreen = ({ navigation }) => {
   const [reservation, setReservation] = useState(null);
   const [visible, setVisible] = useState(false);

   const showDialog = () => setVisible(true);

   const hideDialog = () => setVisible(false);

   const onReservationMade = (reservation) => {
      console.log(reservation);
      setReservation(reservation);
      showDialog();
   };

   return (
      <Layout clean>
         <Main>
            <TitleContainer>
               <Title>¡Realiza tu reserva!</Title>
            </TitleContainer>
            <ReservationFormContainer>
               <ReservationForm onReservationMade={onReservationMade} />
               {visible && (
                  <DialogModal
                     type="reservation"
                     visible={visible}
                     hideDialog={hideDialog}
                     currentRes={reservation}
                     nav={navigation}
                  />
               )}
            </ReservationFormContainer>
         </Main>
      </Layout>
   );
};

export default ReservationScreen;
