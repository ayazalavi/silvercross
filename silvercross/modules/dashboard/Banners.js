import React, {Component} from 'react';
import {View, Text} from 'react-native';
import dashboard from '../styles/dashboard';

class Banners extends Component {
  constructor(props) {
    super(props);
    this.state = {temperature: props.temperature, humidity: props.humidity};
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}
  render() {
    return (
      <View style={dashboard.banners}>
        <View style={dashboard.leftBanner}>
          <Text style={dashboard.leftBannerTitle}>Temperature</Text>
          <Text
            style={
              this.props.temperatureAlert
                ? {...dashboard.leftBannerSubTitle, ...{color: '#FF5050'}}
                : dashboard.leftBannerSubTitle
            }>
            {this.props.temperature + '\u2103'}
          </Text>
        </View>
        <View style={dashboard.rightBanner}>
          <Text style={dashboard.rightBannerTitle}>Humidity</Text>
          <Text style={dashboard.rightBannerSubTitle}>
            {this.props.humidity}%
          </Text>
        </View>
      </View>
    );
  }
}

export default Banners;
