import React, {Component} from 'react';
import {View} from 'react-native';
import TabButton from './TabButton';
import common from '../styles/common';

class Tab extends Component {
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
      <View style={common.tab}>
        <View style={common.backgroundTab} />
        <TabButton
          onPress={() => {}}
          style={common.tabButton}
          source={require('../../assets/home.png')}
        />
        <TabButton
          onPress={() => {
            alert(1);
          }}
          style={common.tabButtonCenter}
          source={require('../../assets/group_99.png')}
        />
        <TabButton
          onPress={() => {}}
          style={common.tabButton}
          source={require('../../assets/mic.png')}
        />
      </View>
    );
  }
}

export default Tab;
