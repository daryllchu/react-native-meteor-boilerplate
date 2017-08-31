import React, { Component } from 'react';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from '../components/Swiper';
import { Navigation } from 'react-native-navigation';
import {
  StyleSheet,   // CSS-like styles
  StatusBar,
  Text,         // Renders text
  View          // Container component
} from 'react-native';

export default class Intro extends Component {

  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }

  buttonPress() {
    console.log('called');
    //alert(navigation);

    // this.props.navigator.push({
    //   screen: 'screen.signin', // unique ID registered with Navigation.registerScreen
    //   //title: undefined, // navigation bar title of the pushed screen (optional)
    //   //titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
    //   passProps: {}, // Object that will be passed as props to the pushed screen (optional)
    //   animated: true, // does the push have transition animation or does it happen immediately (optional)
    //   animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
    //   backButtonTitle: undefined, // override the back button title (optional)
    //   backButtonHidden: false, // hide the back button altogether (optional)
    //   navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
    //   navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    // });

    alert('lala');
  }

  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Icon name="ios-nutrition" {...iconStyles} />
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Icon name="ios-cloud-upload" {...iconStyles} />
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Icon name="ios-heart" {...iconStyles} />
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

const iconStyles = {
  size: 100,
  color: '#FFFFFF',
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});
