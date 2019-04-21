import React from 'react';
import {
  Image, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import icon from '../assets/images/icon.png';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
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
      <Subtitle text={title} />
    </View>
  );
}

AddBtn.propTypes = {
  title: PropTypes.string.isRequired
};
