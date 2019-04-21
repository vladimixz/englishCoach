import React from 'react';
import {
  Text, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    opacity: 0.50
  }
});

export default function Subtitle({ text }) {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
};
