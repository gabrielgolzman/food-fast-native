import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
   Main,
   SuccessText,
   MessageContainer,
} from './ReservationResumeScreen.styles';
import { ReservationText } from '../../../components/ui/DialogModal/DialogModal.styles';
import { colors } from '../../../infrastructure/theme/colors';

import Layout from '../../../utility/Layout/Layout';
import { FadeInView } from '../../../utility/animations/FadeAnimation';
import Button from '../../../components/ui/Button/Button';

const ReservationResumeScreen = ({ navigation, route }) => {
   const { reservationString } = route.params;
   return (
      <Layout clean>
         <Main>
            <FadeInView>
               <MessageContainer>
                  <MaterialIcons
                     size={75}
                     color={colors.ui.primary}
                     name="check-circle"
                  />
                  <SuccessText>
                     ¡Su reserva fue realizada con éxito!
                  </SuccessText>

                  <ReservationText>{reservationString}</ReservationText>
               </MessageContainer>
            </FadeInView>

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
         </Main>
      </Layout>
   );
};

export default ReservationResumeScreen;
