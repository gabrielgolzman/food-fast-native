import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const FormContainer = styled.View`
   align-items: center;
`;

export const ReservationDateText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.body};
   color: ${(props) => props.theme.colors.ui.primary};
`;

export const PickerContainer = styled.View`
   width: 60%;
   border-radius: 20px;
   border-width: 1px;
   margin-bottom: ${(props) => props.theme.space[4]};
   border-color: ${(props) => props.theme.colors.ui.primary};
`;

export const ReservationPicker = styled(Picker)`
   height: 50px;
   width: 100%;
   color: ${(props) => props.theme.colors.ui.primary};
   justify-content: center;
`;
