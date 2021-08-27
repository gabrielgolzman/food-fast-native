import React from 'react';

import { Main } from './MainScreen.styles';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';

const MainScreen = ({ navigation }) => {
   return (
      <Layout clean>
         <Main>
            <Button
               type="main"
               icon="email-outline"
               onPress={() => navigation.navigate('reserve')}
            >
               Pedir reserva
            </Button>
            <Button
               type="main"
               icon="silverware-variant"
               onPress={() => navigation.navigate('menu')}
            >
               Estoy en el local
            </Button>
         </Main>
      </Layout>
   );
};

export default MainScreen;
