import React from 'react';
import {
  View, TouchableWithoutFeedback, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';
import InputTitle from '../../components/InputTitle';
import Layout from '../../layout/Layout';
import AddBtn from '../../components/AddBtn';
import dictation from '../../assets/images/dictation.png';

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
  dictation: {
    height: 60,
    flex: 1,
    width: null,
    resizeMode: 'contain'
  }
});

export default class AddWordDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Tangible'
    };
  }

  setWord = (word) => {
    this.setState({ word });
  }

  render() {
    const { word } = this.state;
    const { navigation } = this.props;
    // const { currentSound } = navigation.state.params;
    // console.log(currentSound);
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
              <InputTitle
                text="Слово"
                value={word}
                setValue={this.setWord}
                isEditable
              />
              <Image
                style={styles.dictation}
                source={dictation}
              />
            </View>
          </View>
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
