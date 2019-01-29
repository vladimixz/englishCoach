import React from 'react';
import {
  Text, Image, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import icon from '../assets/images/icon.png';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  playlistTitle: {
    fontSize: 24,
    opacity: 0.50
  },
  icon: {
    alignSelf: 'center',
    width: 150,
    height: 150
  }
});

export default function AddBtn({ title }) {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Text style={styles.playlistTitle}>
        {title}
      </Text>
    </View>
  );
}

AddBtn.propTypes = {
  title: PropTypes.string.isRequired
};
