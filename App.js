import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
  const soundList = [
    require('./assets/one.wav'),
    require('./assets/two.wav'),
    require('./assets/three.wav'),
    require('./assets/four.wav'),
    require('./assets/five.wav'),
    require('./assets/six.wav'),
    require('./assets/seven.wav'),
    require('./assets/eight.wav'),
    require('./assets/nine.wav'),
    require('./assets/ten.wav'),
  ];

  return (
    <ScrollView>
      <View>
        <Image source={require('./assets/logo.png')} />
        <Text>Spanish Number</Text>
      </View>
    </ScrollView>
  );
};

export default App;
