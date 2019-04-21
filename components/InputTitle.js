import React from 'react';
import {
  TextInput, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default function InputTitle({
  text, value, setValue, isEditable
}) {
  return (
    <View style={styles.container}>
      <Subtitle text={text} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={name => setValue(name)}
        editable={isEditable}
        selectTextOnFocus={isEditable}
      />
    </View>
  );
}

InputTitle.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired
};
