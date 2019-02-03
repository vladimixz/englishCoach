import React from 'react';
import {
  Text, Image, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  buttonLight: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 21,
    paddingBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonDark: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 21,
    paddingBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextLight: {
    flexWrap: 'wrap',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#fff',
    flexWrap: 'wrap',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonImage: {
    marginRight: 8
  }
});

export default function Button({ isDark, text, image }) {
  return (
    <View style={isDark ? styles.buttonDark : styles.buttonLight}>
      {image && (
        <Image
          source={image}
          style={styles.buttonImage}
        />
      )}
      <Text style={isDark ? styles.buttonTextDark : styles.buttonTextLight}>
        {text}
      </Text>
    </View>
  );
}

Button.propTypes = {
  isDark: PropTypes.bool.isRequired,
  image: PropTypes.number,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  image: undefined
};
