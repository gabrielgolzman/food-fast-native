import React, { useContext } from 'react';

import { Main } from './MainScreen.styles';
import { ReservationsContext } from '../../services/reservation/reservations.context';
import { colors } from '../../infrastructure/theme/colors';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';

const MainScreen = ({ navigation }) => {
   const { reservations, admit } = useContext(ReservationsContext);
   return (
      <Layout nav={navigation} clean>
         <Main>
            <Button
               type="main"
               icon="email-outline"
               onPress={() => navigation.navigate('reservation')}
            >
               Pedir reserva
            </Button>
            {reservations.length > 0 && (
               <Button
                  type="main"
                  icon="email"
                  onPress={() => navigation.navigate('reservation-list')}
                  variation={{ backgroundColor: colors.ui.secondary }}
               >
                  Ver mis reservas
               </Button>
            )}
            {admit && (
               <Button
                  type="main"
                  icon="silverware-variant"
                  onPress={() => navigation.navigate('menu')}
               >
                  Estoy en el local
               </Button>
            )}
         </Main>
      </Layout>
   );
};

export default MainScreen;
