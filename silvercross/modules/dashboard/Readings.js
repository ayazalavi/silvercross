import React, {Component} from 'react';
import {View, Text} from 'react-native';
import dashboard from '../styles/dashboard';

class Readings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pm1: props.pm1,
      pm25: props.pm25,
      pm10: props.pm10,
      voc: props.voc,
    };
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
      <View>
        <Text style={dashboard.readingsHeader}>Air is Moderate</Text>
        <View style={dashboard.readings}>
          <View style={dashboard.flex1}>
            <Text style={dashboard.readingsTitle}>{this.props.pm1}</Text>
            <Text style={dashboard.readingsSubTitle}>PM 1</Text>
          </View>
          <View style={dashboard.flex1}>
            <Text style={dashboard.readingsTitle}>{this.props.pm25}</Text>
            <Text style={dashboard.readingsSubTitle}>PM 2.5</Text>
          </View>
          <View style={dashboard.flex1}>
            <Text style={dashboard.readingsTitle}>{this.props.pm10}</Text>
            <Text style={dashboard.readingsSubTitle}>PM 1.0</Text>
          </View>
          <View style={dashboard.flex1}>
            <Text style={dashboard.readingsTitle}>{this.props.voc}</Text>
            <Text style={dashboard.readingsSubTitle}>VOCs</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Readings;
