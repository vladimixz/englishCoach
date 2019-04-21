import React from 'react';
import {
  Image, View, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import icon from '../assets/images/back.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  icon: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 20,
    height: 30
  }
});

export default function BackButton({ goBack }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => goBack()}
    >
      <View style={styles.container}>
        <Image
          source={icon}
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

BackButton.propTypes = {
  goBack: PropTypes.func.isRequired
};
