import React from 'react';
import {
  Image, View, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import arrow from '../assets/images/arrow.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '40%',
  },
  leftDirection: {
    flex: 1,
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }]
  },
  rightDirection: {
    flex: 1,
    resizeMode: 'contain',
  }
});

export default function Arrow({ leftDirection, action }) {
  return (
    <TouchableWithoutFeedback
      onPress={action}
    >
      <View style={styles.container}>
        <Image
          source={arrow}
          style={leftDirection ? styles.leftDirection : styles.rightDirection}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

Arrow.propTypes = {
  leftDirection: PropTypes.bool,
  action: PropTypes.func
};

Arrow.defaultProps = {
  leftDirection: false,
  action: () => {}
};
