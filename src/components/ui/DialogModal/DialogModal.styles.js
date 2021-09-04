import styled from 'styled-components/native';
import { Dialog } from 'react-native-paper';

export const ReservationText = styled(Dialog.Title)`
   color: ${(props) => props.theme.colors.ui.primary}
   font-weight: ${(props) => props.theme.fontWeights.bold}
   text-align:center;
`;
