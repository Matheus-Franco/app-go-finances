import React from 'react';
import { View, StatusBar } from 'react-native';

import Header from './src/components/Header';
import Content from './src/components/Content';

const App: React.FC = () => {
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
