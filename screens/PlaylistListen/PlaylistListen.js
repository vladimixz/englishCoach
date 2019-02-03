import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default class PlaylistListen extends React.Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Text>
            PlaylistListen
          </Text>
        </View>
      </Layout>
    );
  }
}

PlaylistListen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
