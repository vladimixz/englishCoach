import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import dictation from '../assets/images/dictation.png';

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  dictation: {
    height: 60,
    flex: 1,
    width: null,
    resizeMode: 'contain'
  }
});

export default function InputTranslation({
  text, value, setValue
}) {
  return (
    <View style={styles.container}>
      <InputTitle
        text={text}
        value={value}
        setValue={setValue}
        isEditable
      />
      <Image
        style={styles.dictation}
        source={dictation}
      />
    </View>
  );
}

InputTranslation.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};
