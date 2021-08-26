import styled from 'styled-components/native';
import { IconButton } from 'react-native-paper';

export const SettingsButton = styled(IconButton).attrs((props) => ({
   icon: 'cog',
   size: 35,
   color: props.theme.colors.ui.primary,
}))`
   z-index: 10;
`;

export const BackgroundCover = styled.ImageBackground.attrs({
   source: require('../../../assets/img/cover_burger.jpg'),
})`
   width: 100%;
   height: 100%;
`;

export const HeaderContainer = styled.View`
   height: 20%;
   z-index: 1;
   flex-direction: row;
   justify-content: space-between;
`;

export const MainContainer = styled.View`
   height: 70%;
   justify-content: flex-start;
   margin: ${(props) => props.theme.space[2]}
   align-items: center;
`;

export const GreetText = styled.Text`
   color: ${(props) => props.theme.colors.ui.bg}
   font-size: ${(props) => props.theme.fontSizes.h2}
   font-weight:${(props) => props.theme.fontWeights.bold}
   text-align:center;
`;
