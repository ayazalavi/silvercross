import React, {Component} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import dashboard from '../styles/dashboard';

class Toggle extends Component {
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
      <TouchableOpacity onPress={() => {}} style={dashboard.toggle}>
        <View>
          <View style={dashboard.toggleBackground}>
            <Text style={dashboard.toggleText}>OFF</Text>
            <View style={dashboard.toggleCircle} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Toggle;
