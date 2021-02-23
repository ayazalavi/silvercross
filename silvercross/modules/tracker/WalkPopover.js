import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import common from '../styles/common';
import tracker from '../styles/tracker';
import HeaderButton from '../common/HeaderButton';
import {DATA_POINTS} from '../common/Consants';

class WalkPopover extends Component {
  constructor(props) {
    super(props);
    const height = Dimensions.get('window').height;
    console.log(props);
    this.state = {
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

  addWalk() {}

  render() {
    return (
      <View style={tracker.walkPopoverContainer}>
        <Animated.View
          style={[
            common.alertBackground,
            {opacity: this.state.fadeIn},
          ]}></Animated.View>
        <Animated.View
          style={[
            tracker.walkPopover,
            {
              transform: [
                {
                  translateY: this.state.showAnim,
                },
              ],
            },
          ]}>
          <Image
            source={this.props.walk.photo}
            style={tracker.walkPopoverImage}
          />

          <View style={tracker.walkPopoverDetails}>
            <TextInput
              style={tracker.walkTitle}
              editable
              value={'Sunday Stroll'}
            />

            <View style={tracker.walkSubtitle}>
              <Image
                source={require('../../assets/distance.png')}
                style={tracker.walkIcon}
              />
              <Text style={tracker.walkSubtitleText}>
                {this.props.walk.distance}
              </Text>
              <Image
                source={require('../../assets/hours.png')}
                style={{...tracker.walkIcon, ...{marginLeft: 6}}}
              />
              <Text style={tracker.walkSubtitleText}>
                {this.props.walk.time} hours
              </Text>
            </View>
            <AirbnbRating
              defaultRating={this.props.walk.rating}
              showRating={false}
              isDisabled={false}
              count={5}
              selectedColor={'#F9CC33'}
              starStyle={{
                marginRight: 3,
                width: 11,
                height: 11,
              }}
            />
          </View>

          {/* <View>
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
          </View> */}
          <HeaderButton
            onPress={() => this.props.submitData()}
            style={tracker.walkPopoverButton}
            styleText={tracker.formButtonText}
            text={'Submit'}
          />
        </Animated.View>
      </View>
    );
  }
}

export default WalkPopover;
