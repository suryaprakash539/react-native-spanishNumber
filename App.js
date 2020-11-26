import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity style={styles.box} key={sound}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    backgroundColor: '#0f4c75',
    width: '46%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
