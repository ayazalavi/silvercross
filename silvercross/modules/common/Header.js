import React, {Component} from 'react';
import {View} from 'react-native';
import common from '../styles/common';
import HeaderButton from './HeaderButton';
import {HEADER_DASHBOARD, HEADER_TRACKER} from '../common/Consants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: props.selected};
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  updateSelectedHeader(selected) {
    this.setState((state, props) => ({selected}));
  }

  render() {
    console.log(this.state);
    return (
      <View style={common.header}>
        <HeaderButton
          type={HEADER_DASHBOARD}
          onPress={(selected) => this.props.navigate(selected)}
          style={
            this.state.selected === HEADER_DASHBOARD
              ? [common.button1, common.buttonSelected]
              : [common.button1, common.buttonUnSelected]
          }
          styleText={
            this.state.selected === HEADER_DASHBOARD
              ? common.buttonText
              : common.buttonTextSelected
          }
          text={'dashboard'}
        />
        <HeaderButton
          type={HEADER_TRACKER}
          onPress={(selected) => this.props.navigate(selected)}
          style={
            this.state.selected === HEADER_TRACKER
              ? [common.button2, common.buttonSelected]
              : [common.button2, common.buttonUnSelected]
          }
          styleText={
            this.state.selected === HEADER_TRACKER
              ? common.buttonText
              : common.buttonTextSelected
          }
          text={'activity tracker'}
        />
      </View>
    );
  }
}

export default Header;
