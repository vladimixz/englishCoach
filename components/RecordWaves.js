import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ripples from '../assets/images/ripples.png';
import line from '../assets/images/28.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 10
  },
  ripples: {
    flex: 0.48,
    height: 84,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 5,
  },
  line: {
    height: 200,
    flex: 0.01,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});

export default function RecordWaves() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ripples}
        source={ripples}
      />
      <Image
        style={styles.line}
        source={line}
      />
    </View>
  );
}
