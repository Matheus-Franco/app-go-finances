import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Header from './src/components/Header';
import Content from './src/components/Content';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <Header />
        <Content />
      </View>
    </>
  );
};

export default App;
