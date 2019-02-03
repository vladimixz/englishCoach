import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  item: {
    flex: 0.33,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  itemNumberContainer: {
    width: 56
  },
  itemNumber: {
    flex: 1,
    fontSize: 26,
    color: '#ddd',
    textAlign: 'right',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15
  },
  textMain: {
    fontSize: 26
  },
  textDescription: {
    fontSize: 22,
    color: '#ddd'
  }
});

export default function ListItem({ number, text, description }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemNumberContainer}>
        <Text style={styles.itemNumber}>
          {number}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textMain}>
          {text}
        </Text>
        <Text style={styles.textDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

ListItem.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
