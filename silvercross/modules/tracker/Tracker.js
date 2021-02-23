import React, {Component} from 'react';
import {View} from 'react-native';
import {
  addNewWalk,
  getWalks,
  HEADER_DASHBOARD,
  HEADER_TRACKER,
  MENU_EXPLORER,
  MENU_YOU,
  userWalks,
  WALK_STATUS,
} from '../common/Consants';
import Header from '../common/Header';
import tracker from '../styles/tracker';
import Tab from '../common/Tab';
import Toggle from '../common/Toggle';
import Menu from './Menu';
import FindWalkForm from './FindWalkForm';
import WalkList from './WalkList';
import WalkMap from './WalkMap';
import RoundButton from '../common/RoundButton';
import WalkPopover from './WalkPopover';

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: MENU_EXPLORER,
      step: 0,
      formData: {
        distance: 25,
        postcode: '',
        type: {childFriendly: true, flat: false},
      },
      walk: {},
      walkStatus: WALK_STATUS.NOT_STARTED,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  tapped(selected) {
    this.setState((prevState) => {
      if (prevState.selected !== selected) {
        return {selected};
      } else {
        switch (selected) {
          case MENU_EXPLORER:
            if (prevState.step > 0)
              return {step: prevState.step - 1, walkEnded: false};
            break;
        }
      }
    });
  }

  onFormSubmit(formData) {
    console.log(formData);
    this.setState((prevState) => ({
      step: prevState.step + 1,
      formData,
    }));
  }

  onListTap(walk) {
    console.log(walk);
    this.setState(
      (prevState) => ({
        step: prevState.step + 1,
        walk,
      }),
      () => this.updateWalkStatus(WALK_STATUS.NOT_STARTED, this.state.walk, {}),
    );
  }

  updateWalkStatus(walkStatus, walk, result) {
    console.log('walk status: ', walkStatus, walk, result);
    if (walkStatus === WALK_STATUS.ENDED) {
      addNewWalk(walk);
    }
    this.setState(
      (prevState) => ({
        walkStatus,
        result,
        walk,
      }),
      () => console.log('walk status: ', this.state.walkStatus),
    );
  }

  render() {
    return (
      <View style={tracker.container}>
        <Header
          selected={this.state.selected}
          navigate={(selected) => {
            if (selected === HEADER_DASHBOARD) {
              this.props.navigation.navigate('Dashboard');
            }
          }}
        />
        <Menu selected={MENU_EXPLORER} tapped={(menu) => this.tapped(menu)} />
        {this.state.selected === MENU_EXPLORER && this.state.step === 0 && (
          <FindWalkForm
            onSubmit={(data) => this.onFormSubmit(data)}
            distance={this.state.formData.distance}
            postcode={this.state.formData.postcode}
            type={this.state.formData.type}
          />
        )}
        {this.state.selected === MENU_EXPLORER && this.state.step === 1 && (
          <WalkList onPress={(data) => this.onListTap(data)} />
        )}
        {this.state.selected === MENU_EXPLORER && this.state.step === 2 && (
          <WalkMap
            selected={MENU_EXPLORER}
            walk={this.state.walk}
            updateWalkStatus={(status, walk, data) =>
              this.updateWalkStatus(status, walk, data)
            }
          />
        )}
        {this.state.selected === MENU_YOU && (
          <WalkMap
            selected={MENU_YOU}
            updateWalkStatus={(status, walk, data) =>
              this.updateWalkStatus(status, walk, data)
            }
          />
        )}
        {this.state.walkStatus === WALK_STATUS.ENDED && (
          <WalkPopover
            walk={userWalks[0]}
            submitData={() =>
              this.setState(() => ({
                walkStatus: WALK_STATUS.NOT_STARTED,
              }))
            }
          />
        )}
        <Toggle on={true} />
        <Tab />
      </View>
    );
  }
}

export default Tracker;
