import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './HelpScreen.styles';

import Button from '../../components/ui/Button/Button';

const HelpScreen = ({ navigation }) => {
   return (
      <Container>
         <Button type="goBack" onPress={() => navigation.goBack()} />
         <View>
            <Text
               style={{
                  position: 'absolute',
                  marginTop: 50,
               }}
            >
               The Help Screen
            </Text>
         </View>
      </Container>
   );
};

export default HelpScreen;
