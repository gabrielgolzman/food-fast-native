import styled from 'styled-components';
import { Card } from 'react-native-paper';

export const ReservationList = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 16,
   },
})``;

export const ReservationCardWhole = styled(Card)`
   background-color: ${(props) => props.theme.colors.ui.bg};
   margin-bottom: ${(props) => props.theme.space[3]};
   padding: ${(props) => props.theme.space[0]};
`;

export const ReservationCardContent = styled(Card.Content)`
   justify-content: center;
   align-items: center;
`;

export const ReservationText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
   text-align: center;
   color: ${(props) => props.theme.colors.ui.primary};
   margin-bottom: ${(props) => props.theme.space[3]};
`;
export const ReservationAlterContainer = styled.View`
   width: 100%;
   height: 70%;
`;
export const ReservationAlterText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
   text-align: center;
   color: ${(props) => props.theme.colors.ui.primary};
   margin-bottom: ${(props) => props.theme.space[3]};
`;
