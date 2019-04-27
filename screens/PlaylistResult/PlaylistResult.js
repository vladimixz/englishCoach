import React from 'react';
import {
  View, StyleSheet, TouchableWithoutFeedback, Text, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import InputTitle from '../../components/InputTitle';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import shape from '../../assets/images/shape.png';
import smile from '../../assets/images/smile.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleContainer: {
    paddingTop: 20,
    flex: 0.3
  },
  wordsContainer: {
    flex: 0.42
  },
  listenPlaylistContainer: {
    flex: 0.13
  },
  readyButton: {
    flex: 0.15
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
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  smile: {
    flex: 1,
    width: 68,
    height: 68,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default class PlaylistResult extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image source={smile} style={styles.smile} />
            <Text style={styles.title}>Отлично</Text>
            <InputTitle
              text="Прослушано"
              value="62 раза"
              setValue={() => {}}
              isEditable={false}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.listenPlaylistContainer}>
              <Button
                image={shape}
                text="Слушать плейлист"
                isDark={false}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.wordsContainer}>
            <ListItem
              number={1}
              text="Новые слова"
              description="25.04.2018"
              tooltip="10 слов"
              listTitle="Другие плейлисты:"
              hideBorder
            />
            <ListItem
              number={2}
              text="Про природу"
              description="24.04.2018"
              tooltip="4 слова"
              hideBorder
            />
          </View>
          <TouchableWithoutFeedback
            onPress={
              () => navigation.navigate('PlaylistsYour')
            }
          >
            <View style={styles.readyButton}>
              <Button
                text="Готово"
                isDark
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Layout>
    );
  }
}

PlaylistResult.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
