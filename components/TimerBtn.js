import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    width: 111,
    height: 111,
    position: 'absolute',
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 37,
    fontWeight: 'bold'
  },
  buttonLoader: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default class TimerBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.75,
      currentWord: 4
    };
  }

  render() {
    const { progress, currentWord } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {currentWord}
          </Text>
        </View>
        <Progress.Circle
          style={styles.buttonLoader}
          size={115}
          progress={progress}
          borderWidth={0}
          color="black"
        />
      </View>
    );
  }
}
