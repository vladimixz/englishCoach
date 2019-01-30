import React from 'react';
import {
  View, TouchableWithoutFeedback, StyleSheet, Text
} from 'react-native';
import PropTypes from 'prop-types';
import InputTitle from '../../components/InputTitle';
import InputTranslation from '../../components/InputTranslation';
import Layout from '../../layout/Layout';
import AddBtn from '../../components/AddBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wordContainer: {
    flex: 1,
  },
  titleWrapper: {
    flex: 4,
    marginTop: 26,
  },
  buttonWrapper: {
    flex: 6,
    justifyContent: 'center'
  },
  buttonReadyWrapper: {
    flex: 6,
    justifyContent: 'space-around'
  },
  dictation: {
    height: 60,
    flex: 1,
    width: null,
    resizeMode: 'contain'
  },
  buttonReady: {
    color: '#fff',
    backgroundColor: '#000',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 21,
    paddingBottom: 21
  }
});

export default class AddWordDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Tangible',
      wordTitle: 'Слово',
      translation: 'Осязаемый',
      translationTitle: 'Перевод'
    };
  }

  setWord = (word) => {
    this.setState({ word });
  }

  setTranslation = (translation) => {
    this.setState({ translation });
  }

  render() {
    const {
      word, wordTitle, translation, translationTitle
    } = this.state;
    const { navigation } = this.props;
    const { currentSound } = navigation.state.params;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <InputTitle
              text="Плейлист:"
              value="Название 1"
              setValue={() => {}}
              isEditable={false}
            />
            <View style={styles.wordContainer}>
              <InputTranslation
                text={wordTitle}
                value={word}
                setValue={this.setWord}
              />
            </View>
          </View>
          {currentSound === 'description'
            ? (
              <View style={styles.buttonReadyWrapper}>
                <InputTranslation
                  text={translationTitle}
                  value={translation}
                  setValue={this.setTranslation}
                />
                <TouchableWithoutFeedback
                  onPress={
                    () => navigation.navigate('PlaylistView')
                  }
                >
                  <Text style={styles.buttonReady}>
                    Готово
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            ) : (
              <TouchableWithoutFeedback
                onPress={
                  () => navigation.navigate('AddWord', { currentSound: 'description' })
                }
              >
                <View style={styles.buttonWrapper}>
                  <AddBtn
                    title="Добавьте перевод"
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </View>
      </Layout>
    );
  }
}

AddWordDescription.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        currentSound: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
