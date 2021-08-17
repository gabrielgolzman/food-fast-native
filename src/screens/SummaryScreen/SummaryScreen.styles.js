import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled.View`
   background-color: ${(props) => props.theme.colors.ui.bg};
   width: 100%;
   height: 100%;
   padding: ${(props) => props.theme.space[2]};
`;
export const Header = styled.View`
   height: 15%;
   flex-direction: row;
   justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const OrderList = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 8,
   },
})`
   height: 20%;
`;

export const OrderItem = styled(Card.Content)`
   background-color: ${(props) => props.theme.colors.ui.bg};
   flex-direction: row;
   justify-content: space-between;
   align-items:center;
   border-radius:20px;
   height:60px;
   margin-bottom:${(props) => props.theme.space[3]}
   width: 100%;
`;

export const OrderText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.body};
`;

export const TotalText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const TotalOrder = styled.View`
   height: 15%;
   flex-direction: row;
   margin-top: ${(props) => props.theme.space[2]}
   justify-content: space-between;
   borderColor:${(props) => props.theme.colors.ui.line};
   border-top-width:0.4px;
`;

export const ContinueContainer = styled.View`
   flex: 1;
   justify-content: flex-end;
   align-items: center;
`;

export const GoToMenuContainer = styled.View`
   align-items: center;
`;
