import styled from 'styled-components/native';
import { IconButton } from 'react-native-paper';

export const Container = styled.View`
   flex: 1;
   flex-direction: column-reverse;
`;

export const HeaderImage = styled.ImageBackground.attrs({
   source: require('../../../assets/img/header_restaurant.png'),
})`
   height: 30%;
   width: 100%;
   position: absolute;
   top: 0;
   display: flex;
   flex-direction: column;
   z-index: 1;
   justify-content: space-between;
`;

export const TopButtonsContainer = styled.View`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const SettingsButton = styled(IconButton).attrs((props) => ({
   icon: 'cog',
   size: 35,
   color: props.theme.colors.ui.primary,
}))`
   z-index: 10;
`;

export const Main = styled.View`
   height: 70%;
   justify-content: flex-end;
   align-items: center;
`;
