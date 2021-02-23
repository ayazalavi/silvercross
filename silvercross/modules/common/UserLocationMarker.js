import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {HEADER_DASHBOARD} from './Consants';

class UserLocationMarker extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {
    console.log(this.props.location);
  }

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/marker_current.png')} />
        <Image
          source={require('../../assets/marker_pointer.png')}
          style={{
            position: 'absolute',
            transform: [{rotate: this.props.location.heading + 'deg'}],
          }}
        />
      </View>
    );
  }
}

export default UserLocationMarker;
