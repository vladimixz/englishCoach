import React from 'react';
import {
  Text, View, TouchableWithoutFeedback, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default class AddWordDescription extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Layout>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('PlaylistView')}>
          <View style={styles.container}>
            <Text>
              AddWordDescription
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Layout>
    );
  }
}

AddWordDescription.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
