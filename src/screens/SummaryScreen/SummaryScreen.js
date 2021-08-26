import React, { useContext } from 'react';

import { OrdersContext } from '../../services/orders/orders.context';
import {
   Header,
   HeaderTitle,
   OrderItem,
   TotalOrder,
   OrderList,
   ContinueContainer,
   Container,
   TotalText,
   OrderText,
   GoToMenuContainer,
} from './SummaryScreen.styles';
import { colors } from '../../infrastructure/theme/colors';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';

const SummaryScreen = ({ navigation }) => {
   const { orders, total, toggleCooking } = useContext(OrdersContext);

   return (
      <Layout nav={navigation}>
         <Container>
            <Header>
               <HeaderTitle>Mi Pedido</HeaderTitle>
               <Button type="edit">Editar pedido</Button>
            </Header>
            <OrderList
               data={orders}
               renderItem={({ item }) => (
                  <OrderItem key={item.id} elevation={5}>
                     <OrderText>x{item.quantity}</OrderText>
                     <OrderText>{item.optionName}</OrderText>
                  </OrderItem>
               )}
               keyExtractor={(item) => item.id}
            />

            <TotalOrder>
               <TotalText>Total</TotalText>
               <TotalText>${total}</TotalText>
            </TotalOrder>
            <GoToMenuContainer>
               <Button
                  onPress={() => navigation.navigate('menu')}
                  variation={{
                     width: '65%',
                     backgroundColor: colors.ui.secondary,
                  }}
                  type="large"
               >
                  Volver a la carta
               </Button>
            </GoToMenuContainer>
            <ContinueContainer>
               <Button
                  variation={{ width: '65%' }}
                  type="large"
                  onPress={() => {
                     toggleCooking();
                     return navigation.navigate('waiting');
                  }}
               >
                  Continuar
               </Button>
            </ContinueContainer>
         </Container>
      </Layout>
   );
};

export default SummaryScreen;
