import React from 'react';
import {
  View, Text, TouchableWithoutFeedback, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import earphonesImg from '../../assets/images/earphones.png';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrap: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slogan: {
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  image: {
    flex: 4,
  },
  earphonesImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Layout>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('PlaylistCreate')}>
          <View style={styles.container}>
            <View style={styles.titleWrap}>
              <View style={styles.slogan}>
                <Text style={styles.title}>
                  Учите
                </Text>
                <Text style={styles.text}>
                  только свои слова
                </Text>
              </View>
              <View>
                <Text style={styles.title}>
                  Слушайте
                </Text>
                <Text style={styles.text}>
                  только свой голос
                </Text>
              </View>
            </View>
            <View style={styles.image}>
              <Image
                style={styles.earphonesImg}
                source={earphonesImg}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Layout>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
