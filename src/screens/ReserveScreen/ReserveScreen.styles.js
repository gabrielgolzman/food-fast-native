import styled from 'styled-components/native';

export const Main = styled.View`
   width: 100%;
   height: 100%;
   align-items: center;
`;

export const TitleContainer = styled.View`
   height: 10%;
`;

export const Title = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   font-weight: ${(props) => props.theme.fontWeights.bold};
   text-align: center;
`;

export const ReserveForm = styled.View`
   width: 100%;
   height: 70%;
   align-items: center;
`;
