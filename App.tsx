import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Header from './src/components/Header';
import Dashboard from './src/pages/Dashboard';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#F0F2F5' }}>
        <Header />
        <Dashboard />
      </View>
    </>
  );
};

export default App;
