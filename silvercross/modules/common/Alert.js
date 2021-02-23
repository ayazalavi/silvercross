import React, {Component} from 'react';
import {Animated, Dimensions, Image, View, Text} from 'react-native';
import common from '../styles/common';
import HeaderButton from './HeaderButton';
import {HEADER_DASHBOARD, HEADER_TRACKER} from '../common/Consants';
import Easing from 'react-native/Libraries/Animated/src/Easing';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Alert extends Component {
  constructor(props) {
    super(props);
    const height = Dimensions.get('window').height;
    this.state = {
      title: props.title,
      message: props.message,
      url: props.url,
      height,
      showAnim: new Animated.Value(height),
      fadeIn: new Animated.Value(0),
    };
  }

  appear() {
    Animated.timing(this.state.showAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.fadeIn, {
      toValue: 0.3,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  componentDidMount() {
    this.appear();
  }

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  updateSelectedHeader(selected) {
    this.setState((state, props) => ({selected}));
  }

  render() {
    return (
      <View style={common.alertContainer}>
        <Animated.View
          style={[
            common.alertBackground,
            {opacity: this.state.fadeIn},
          ]}></Animated.View>
        <Animated.View
          style={[
            common.alert,
            {
              transform: [
                {
                  translateY: this.state.showAnim,
                },
              ],
            },
          ]}>
          <Image
            source={require('../../assets/alert.png')}
            style={common.alertIconTop}
          />
          <View>
            <Text style={common.alertTitle}>{this.props.title}</Text>
            <Text style={common.alertMessage}>{this.props.message}</Text>
            {this.props.url !== '' && (
              <View style={{alignItems: 'center'}}>
                <Text style={common.alertMessage}>
                  For top tip’s on keeping your child cool
                </Text>
                <TouchableOpacity style={common.alertUrl}>
                  <Text style={common.alertUrlText}>Click Here</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Image
            source={require('../../assets/alert_tick.png')}
            style={common.alertIconBottom}
          />
        </Animated.View>
      </View>
    );
  }
}

export default Alert;
