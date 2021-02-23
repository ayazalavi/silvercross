import React, {Component} from 'react';
import {View} from 'react-native';
import common from '../styles/common';
import HeaderButton from '../common/HeaderButton';
import {
  HEADER_DASHBOARD,
  HEADER_TRACKER,
  MENU_EXPLORER,
  MENU_YOU,
} from '../common/Consants';
import tracker from '../styles/tracker';

class Menu extends Component {
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
    if (this.state.selected !== selected)
      this.setState((state, props) => ({selected}));
    this.props.tapped(selected);
  }

  render() {
    return (
      <View style={tracker.menu}>
        <HeaderButton
          type={MENU_YOU}
          onPress={(selected) => this.updateSelectedHeader(selected)}
          style={tracker.menuButton1}
          styleText={
            this.state.selected === MENU_YOU
              ? tracker.menuButtonSelected
              : tracker.menuButtonUnSelected
          }
          text={'YOU'}
        />
        <HeaderButton
          type={MENU_EXPLORER}
          onPress={(selected) => this.updateSelectedHeader(selected)}
          style={tracker.menuButton2}
          styleText={
            this.state.selected === MENU_EXPLORER
              ? tracker.menuButtonSelected
              : tracker.menuButtonUnSelected
          }
          text={'EXPLORER'}
        />
      </View>
    );
  }
}

export default Menu;
