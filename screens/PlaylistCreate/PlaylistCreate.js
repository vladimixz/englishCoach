import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
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
            <InputTitle
              text="Плейлист:"
              value={playlistName}
              setValue={this.setPlaylistName}
              isEditable
            />
          </View>
          <TouchableWithoutFeedback
            onPress={
              () => navigation.navigate('AddWord', { currentSound: 'word' })
            }
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
