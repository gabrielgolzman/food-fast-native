import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

import { theme } from '../../../infrastructure/theme/index';

export const AccountBackground = styled.ImageBackground.attrs({
   source: require('../../../../assets/img/cover_burger.jpg'),
})`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const AccountContainer = styled.View`
   background-color: rgba(255, 255, 255, 0.75);
   margin: ${(props) => props.theme.space[2]};
   padding: ${(props) => props.theme.space[4]};
   align-items: center;
`;

export const AuthInput = styled(TextInput).attrs({
   selectionColor: theme.colors.ui.primary,
   underlineColor: theme.colors.ui.primary,
   outlineColor: theme.colors.ui.primary,
   theme: {
      colors: {
         primary: theme.colors.ui.primary,
      },
   },
})`
   width: 300px;
   margin-bottom: ${theme.space[3]};
`;

export const Title = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ErrorContainer = styled.View`
   max-width: 300px;
   align-items: center;
   align-self: center;
   margin-top: ${(props) => props.theme.space[2]};
   margin-bottom: ${(props) => props.theme.space[2]};
`;

export const ErrorText = styled.Text`
   color: ${(props) => props.theme.colors.ui.delete};
`;
