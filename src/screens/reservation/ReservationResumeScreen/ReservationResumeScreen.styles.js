import styled from 'styled-components/native';

export const Main = styled.View`
   width: 100%;
   height: 100%;
   align-items: center;
   margin-bottom:${(props) => props.theme.space[4]}
   justify-content: center;
`;

export const MessageContainer = styled.View`
   align-items: center;
   justify-content: center;
`;

export const SuccessText = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;
