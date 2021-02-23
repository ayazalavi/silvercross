import React, {Component} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HEADER_DASHBOARD} from './Consants';

class WalkMarker extends Component {
  constructor(props) {
    super(props);
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
      <TouchableOpacity activeOpacity={1} onPress={this.props.onPress}>
        <Image source={require('../../assets/marker_reddot.png')} />
      </TouchableOpacity>
    );
  }
}

export default WalkMarker;
