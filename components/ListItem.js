import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    height: 85
  },
  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 85
  },
  itemNumberContainer: {
    width: 56
  },
  itemNumber: {
    fontSize: 26,
    color: '#ddd',
    textAlign: 'right'
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
  },
  tooltip: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    opacity: 0.3,
    fontSize: 18
  },
  listTitle: {
    opacity: 0.3,
    fontSize: 16,
    lineHeight: 19
  }
});

export default function ListItem({
  number, text, description, tooltip, hideBorder, listTitle
}) {
  return (
    <View style={hideBorder ? styles.flatItem : styles.item}>
      <View style={styles.itemNumberContainer}>
        <Text style={styles.itemNumber}>
          {number}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.listTitle}>
          {listTitle}
        </Text>
        <Text style={styles.textMain}>
          {text}
        </Text>
        <Text style={styles.textDescription}>
          {description}
        </Text>
        <Text style={styles.tooltip}>
          {tooltip}
        </Text>
      </View>
    </View>
  );
}

ListItem.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  listTitle: PropTypes.string,
  hideBorder: PropTypes.bool
};

ListItem.defaultProps = {
  tooltip: '',
  listTitle: '',
  hideBorder: false
};
