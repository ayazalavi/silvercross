import React, {Component} from 'react';
import {View, Text} from 'react-native';
import common from '../styles/common';
import WalkMap from '../tracker/WalkMap';

class WalkMeter extends Component {
  constructor(props) {
    super(props);
    this.state = {walkingSince: 0};
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {
    // console.log(prevProp, this.props);
  }

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  showDate() {
    console.log(this.state.walkingSince);
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setDate();
    }, 500);
    //if (this.state.walkingSince === 0) {}
    return new Date(this.state.walkingSince).toISOString().substr(11, 8);
  }

  setDate() {
    let time = this.state.walkingSince + 500;
    this.setState((prevState) => ({walkingSince: time}));
  }

  render() {
    return (
      <View style={common.walkMeter}>
        <View
          style={[
            common.walkMeterColumn,
            {borderRightWidth: 1, borderRightColor: 'rgba(0,0,0, 0.1)'},
          ]}>
          <Text style={common.walkText}>Distance</Text>
          <Text style={common.walkText}>
            {parseFloat(this.props.distance).toFixed(1)}KM
          </Text>
        </View>
        <View style={common.walkMeterColumn}>
          <Text style={common.walkText}>Time</Text>
          <Text style={common.walkText}>{this.showDate()}</Text>
        </View>
      </View>
    );
  }
}

export default WalkMeter;
