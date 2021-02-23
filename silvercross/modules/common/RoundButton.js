import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {HEADER_DASHBOARD} from './Consants';

class RoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  tapped() {
    this.props.onPress();
    this.setState((prevState) => ({selected: !prevState.selected}));
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.tapped()}
        style={this.props.style}
        activeOpacity={1}>
        <Image source={this.props.imagePath} style={this.props.imageStyle} />
      </TouchableOpacity>
    );
  }
}

export default RoundButton;
