import React from 'react';
import {
  View, TouchableWithoutFeedback, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import RecordWaves from '../../components/RecordWaves';
import StopRecordBtn from '../../components/StopRecordBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.1,
  },
  buttonContainer: {
    flex: 0.4
  },
  waveContainer: {
    flex: 0.5
  },
});

export default class AddWord extends React.Component {
  render() {
    const { navigation } = this.props;
    const { currentSound } = navigation.state.params;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.topContainer} />
          <View style={styles.waveContainer}>
            <RecordWaves />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('AddWordDescription', { currentSound })}
          >
            <View style={styles.buttonContainer}>
              <StopRecordBtn />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Layout>
    );
  }
}

AddWord.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        currentSound: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
