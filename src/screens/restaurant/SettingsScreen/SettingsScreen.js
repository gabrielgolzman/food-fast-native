import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './SettingsScreen.styles';

import Button from '../../components/ui/Button/Button';

const SettingsScreen = ({ navigation }) => {
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
               The Settings Screen
            </Text>
         </View>
      </Container>
   );
};

export default SettingsScreen;
