import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

class TabButton extends Component {
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
        <Image source={this.props.source} />
      </TouchableOpacity>
    );
  }
}

export default TabButton;
