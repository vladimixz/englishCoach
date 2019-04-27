import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import ListItem from '../../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleWtap: {
    flex: 0.1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  wordsContainer: {
    flex: 0.4
  }
});

export default class PlaylistsYour extends React.Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleWtap}>
            <Text style={styles.title}>Ваши плейлисты</Text>
          </View>
          <View style={styles.wordsContainer}>
            <ListItem
              number={1}
              text="Новые слова"
              description="25.04.2018"
              tooltip="10 слов"
            />
            <ListItem
              number={2}
              text="Про природу"
              description="24.04.2018"
              tooltip="4 слова"
            />
          </View>
        </View>
      </Layout>
    );
  }
}

PlaylistsYour.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
