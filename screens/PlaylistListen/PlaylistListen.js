import React from 'react';
import {
  Text, View, StyleSheet, Image, TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import InputTitleHeader from '../../components/InputTitleHeader';
import VoiceTitle from '../../components/VoiceTitle';
import InputTitle from '../../components/InputTitle';
import TimerBtn from '../../components/TimerBtn';
import Arrow from '../../components/Arrow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleContainer: {
    flex: 1,
  },
  voiceContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  voiceTitle: {
    flex: 0.5
  },
  translation: {
    flex: 0.3,
  },
  timerWrap: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row'
  },
  timer: {
    flex: 0.5
  },
  timeArrow: {
    flex: 0.25
  },
  footer: {
    flex: 2,
    flexDirection: 'column',
  },
  footerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  footerButton: {
    color: '#000000',
    opacity: 0.5,
    fontSize: 24
  },
  footerLines: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  footerLine: {
    flex: 1,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3
  },
  footerLineGray: {
    flex: 1,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    opacity: 0.1
  }
});

export default class PlaylistListen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <InputTitleHeader
              text="Плейлист:"
              value="Слова из видео"
              setValue={() => {}}
              isEditable={false}
              goBack={navigation.goBack}
              goToSettings={() => navigation.navigate('PlaylistView')}
            />
          </View>
          <View style={styles.voiceContainer}>
            <View style={styles.voiceTitle}>
              <VoiceTitle subtitle="Слово" title="Tangible" />
            </View>
            <View style={styles.translation}>
              <InputTitle
                text="Перевод"
                value="Осязаемый"
                setValue={() => {}}
                isEditable={false}
              />
            </View>
          </View>
          <View style={styles.timerWrap}>
            <View style={styles.timeArrow}>
              <Arrow leftDirection />
            </View>
            <View style={styles.timer}>
              <TimerBtn />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlaylistResult')}>
              <View style={styles.timeArrow}>
                <Arrow />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerButtons}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View>
                  <Image />
                  <Text style={styles.footerButton}>
                    В разброс
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Text style={styles.footerButton}>
                  Рус/Англ
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.footerLines}>
              <View style={styles.footerLine} />
              <View style={styles.footerLine} />
              <View style={styles.footerLine} />
              <View style={styles.footerLine} />
              <View style={styles.footerLineGray} />
              <View style={styles.footerLineGray} />
              <View style={styles.footerLineGray} />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

PlaylistListen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }).isRequired
};
