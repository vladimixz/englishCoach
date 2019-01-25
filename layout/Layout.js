import React from 'react';
import {
  View, StyleSheet, StatusBar
} from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000'
  },
  statusBarBg: {
    position: 'absolute',
    height: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#000'
  }
});

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.statusBarBg} />
        {children}
      </View>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
