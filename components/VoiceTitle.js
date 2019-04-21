import React from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import icon from '../assets/images/speaker.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  voice: {
    flexDirection: 'row'
  },
  voiceImage: {
    width: 35,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: 12
  },
  voiceWord: {
    fontSize: 56,
    fontWeight: 'bold'
  }
});

export default function VoiceTitle({ subtitle, title }) {
  return (
    <View style={styles.container}>
      <Subtitle text={subtitle} />
      <View style={styles.voice}>
        <Image style={styles.voiceImage} source={icon} />
        <Text style={styles.voiceWord}>
          {title}
        </Text>
      </View>
    </View>
  );
}

VoiceTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
