import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import InputTitle from '../../components/InputTitle';
import AddBtn from '../../components/AddBtn';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import shape from '../../assets/images/shape.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleContainer: {
    flex: 1
  },
  wordsContainer: {
    flex: 4
  },
  buttonsContainer: {
    flex: 5
  },
  addWordContainer: {
    flex: 7
  },
  listenPlaylistContainer: {
    flex: 3
  },
  button: {
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 21,
    paddingBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    flexWrap: 'wrap',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonImage: {
    marginRight: 8
  }
});

export default class PlaylistView extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <InputTitle
              text="Плейлист:"
              value="Слова из видео"
              setValue={() => {}}
              isEditable={false}
            />
          </View>
          <View style={styles.wordsContainer}>
            <ListItem
              number={1}
              text="Tangible"
              description="Осязаемый"
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableWithoutFeedback
              onPress={
                () => navigation.navigate('AddWord', { currentSound: 'word' })
              }
            >
              <View style={styles.addWordContainer}>
                <AddBtn
                  title="Добавьте слово..."
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlaylistListen')}>
              <View style={styles.listenPlaylistContainer}>
                <Button
                  image={shape}
                  text="Слушать плейлист"
                  isDark={false}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Layout>
    );
  }
}

PlaylistView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
