import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import loading from '../../assets/load.json';

const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LottieView source={loading} autoPlay autoSize />
    </View>
  );
};

export default Loading;
