import React from 'react';
import {
  View, StyleSheet, TouchableWithoutFeedback, Image
} from 'react-native';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import BackButton from './BackButton';
import icon from '../assets/images/settings.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    alignItems: 'center',
    flex: 6
  },
  text: {
    fontSize: 24,
    opacity: 0.50
  },
  input: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  backButton: {
    flex: 2,
  },
  settingsButton: {
    flex: 2,
  },
  icon: {
    width: 34,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 14
  }
});

export default function InputTitleHeader({
  text, value, setValue, isEditable, goBack, goToSettings
}) {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton goBack={goBack} />
      </View>
      <View style={styles.textContainer}>
        <InputTitle
          text={text}
          value={value}
          setValue={setValue}
          isEditable={isEditable}
        />
      </View>
      <TouchableWithoutFeedback onPress={goToSettings}>
        <View style={styles.settingsButton}>
          <Image
            source={icon}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

InputTitleHeader.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  goBack: PropTypes.func.isRequired,
  goToSettings: PropTypes.func.isRequired
};
