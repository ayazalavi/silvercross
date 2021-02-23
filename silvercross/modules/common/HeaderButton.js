import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {HEADER_DASHBOARD} from './Consants';

class HeaderButton extends Component {
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
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.type)}
        style={this.props.style}>
        <Text style={this.props.styleText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default HeaderButton;
