import React from 'react';
import {
  View, StyleSheet, Text, AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import ListItems from '../../components/ListItems';

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
  constructor(props) {
    super(props);
    this.state = {
      playlists: {}
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('playlists').then((playlists) => {
      if (playlists) {
        this.setState({ playlists: JSON.parse(playlists) });
      }
    });
  }

  render() {
    const { playlists } = this.state;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleWtap}>
            <Text style={styles.title}>Ваши плейлисты</Text>
          </View>
          <View style={styles.wordsContainer}>
            <ListItems playlists={playlists} />
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
