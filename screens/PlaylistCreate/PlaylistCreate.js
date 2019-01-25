import React from 'react';
import {
  Text, View, TouchableWithoutFeedback, StyleSheet, TextInput, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import icon from '../../assets/images/icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleWrapper: {
    flex: 3,
    marginTop: 26,
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 7,
    justifyContent: 'center',
  },
  playlistTitle: {
    fontSize: 24,
    opacity: 0.50
  },
  playlistName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  icon: {
    alignSelf: 'center',
    width: 150,
    height: 150
  }
});

export default class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'Название 1'
    };
  }

  setPlaylistName = (playlistName) => {
    this.setState({ playlistName });
  }

  render() {
    const { playlistName } = this.state;
    const { navigation } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.playlistTitle}>
              Плейлист:
            </Text>
            <TextInput
              style={styles.playlistName}
              value={playlistName}
              onChangeText={(name) => { this.setPlaylistName(name); }}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('AddWord')}>
            <View style={styles.buttonWrapper}>
              <Image
                source={icon}
                style={styles.icon}
              />
              <Text style={styles.playlistTitle}>
                Добавьте слово...
              </Text>
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
