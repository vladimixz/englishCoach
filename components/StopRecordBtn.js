import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import holdingBtn from '../assets/images/holding_btn.png';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    width: 111,
    height: 111,
    position: 'absolute',
    marginTop: 2,
  },
  buttonLoader: {
    flex: 1,
    alignSelf: 'center',
  }
});

export default class StopRecordBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateProgress(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateProgress() {
    const { progress } = this.state;
    if (progress < 1) {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            progress: prevState.progress + 0.01,
          };
        },
      );
    } else {
      clearInterval(this.interval);
    }
  }

  render() {
    const { progress } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.button}
          source={holdingBtn}
        />
        <Progress.Circle
          style={styles.buttonLoader}
          size={115}
          progress={progress}
          borderWidth={0}
          color="red"
        />
      </View>
    );
  }
}
