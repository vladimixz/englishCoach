import React from 'react';
import {
  View, TouchableWithoutFeedback, StyleSheet, AsyncStorage, Alert
} from 'react-native';
import PropTypes from 'prop-types';
import InputTitle from '../../components/InputTitle';
import Layout from '../../layout/Layout';
import AddBtn from '../../components/AddBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleWrapper: {
    flex: 3,
    marginTop: 26
  },
  buttonWrapper: {
    flex: 7,
    justifyContent: 'center',
  }
});

export default class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'Название 1',
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

  setPlaylistName = (playlistName) => {
    this.setState({ playlistName });
  }

  createPlaylist = () => {
    const { navigation } = this.props;
    const { playlists, playlistName } = this.state;
    if (!playlists[playlistName]) {
      const newPlaylists = {
        ...playlists,
        [playlistName]: {
          date: Date.now(),
          wordsCount: 0,
          key: [Date.now(), playlistName].join('_')
        }
      };
      AsyncStorage.setItem('playlists', JSON.stringify(newPlaylists)).then(() => {
        navigation.navigate('AddWord', { currentSound: 'word' });
      });
    } else {
      Alert.alert('Плейлист с таким именем уже существует.');
    }
  }

  render() {
    const { playlistName } = this.state;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <InputTitle
              text="Плейлист:"
              value={playlistName}
              setValue={this.setPlaylistName}
              isEditable
            />
          </View>
          <TouchableWithoutFeedback
            onPress={this.createPlaylist}
          >
            <View style={styles.buttonWrapper}>
              <AddBtn
                title="Добавьте слово..."
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Layout>
    );
  }
}

PlaylistCreate.propTypes = {

  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
