import React, { useContext } from 'react';

import { Main } from './MainScreen.styles';
import { ReservationsContext } from '../../services/reservation/reservations.context';
import { colors } from '../../infrastructure/theme/colors';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

const MainScreen = ({ navigation }) => {
   const { reservations } = useContext(ReservationsContext);
   const { onLogout } = useContext(AuthenticationContext);
   return (
      <Layout clean>
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
            <Button
               type="main"
               icon="silverware-variant"
               onPress={() => navigation.navigate('menu')}
            >
               Estoy en el local
            </Button>
            <Button type="main" icon="silverware-variant" onPress={onLogout}>
               Logout
            </Button>
         </Main>
      </Layout>
   );
};

export default MainScreen;
