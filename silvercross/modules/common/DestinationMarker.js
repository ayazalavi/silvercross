import React, {Component} from 'react';
import {Image} from 'react-native';
import {HEADER_DASHBOARD} from './Consants';

class DestinationMarker extends Component {
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
    return <Image source={require('../../assets/marker_dest.png')} />;
  }
}

export default DestinationMarker;
