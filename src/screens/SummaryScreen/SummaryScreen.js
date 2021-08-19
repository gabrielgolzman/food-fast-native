import React, { useContext, useState, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';

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
   const { orders, total, setCheckbox } = useContext(OrdersContext);
   const [isEditing, setIsEditing] = useState(false);
   const [oneIsChecked, setOneIsChecked] = useState(false);

   const handleCheck = (id) => {
      setCheckbox(id);
   };

   const onIsEditing = () => {
      setIsEditing(!isEditing);
   };

   useEffect(() => {
      setOneIsChecked(orders.some((ord) => ord.isChecked));
   }, [orders]);

   return (
      <Layout nav={navigation}>
         <Container>
            <Header>
               <HeaderTitle>Mi Pedido</HeaderTitle>
               {!isEditing && (
                  <Button type="edit" onPress={onIsEditing}>
                     Editar pedido
                  </Button>
               )}
            </Header>
            <OrderList
               data={orders}
               renderItem={({ item }) => (
                  <OrderItem key={item.id} elevation={5}>
                     <OrderText>x{item.quantity}</OrderText>
                     {isEditing && (
                        <Checkbox
                           color={colors.ui.primary}
                           status={item.isChecked ? 'checked' : 'unchecked'}
                           onPress={() => handleCheck(item.id)}
                        />
                     )}

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
               {!oneIsChecked ? (
                  <Button variation={{ width: '65%' }} type="large">
                     Continuar
                  </Button>
               ) : (
                  <Button variation={{ width: '65%' }} type="large">
                     Eliminar seleccionados
                  </Button>
               )}
            </ContinueContainer>
         </Container>
      </Layout>
   );
};

export default SummaryScreen;
