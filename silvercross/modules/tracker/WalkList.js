import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import tracker from '../styles/tracker';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {getWalks, userWalks} from '../common/Consants';

class WalkList extends Component {
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

  walkList() {
    //const walks = getWalks();

    return userWalks.map((walk, index) => {
      if (!walk.photo) {
        return <View style={{width: '100%', height: 50}} key={index}></View>;
      } else
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={tracker.walkHeader}
            key={index}
            onPress={() => this.props.onPress(walk)}>
            <View style={tracker.walk}>
              <Image source={walk.photo} style={tracker.walkPhoto} />

              <View style={tracker.walkDetails}>
                <Text style={tracker.walkTitle}>{walk.name}</Text>
                <View style={tracker.walkSubtitle}>
                  <Image
                    source={require('../../assets/distance.png')}
                    style={tracker.walkIcon}
                  />
                  <Text style={tracker.walkSubtitleText}>
                    {parseFloat(walk.distance).toFixed(2)} miles
                  </Text>
                  <Image
                    source={require('../../assets/hours.png')}
                    style={{...tracker.walkIcon, ...{marginLeft: 6}}}
                  />
                  <Text style={tracker.walkSubtitleText}>
                    {walk.hours} hours
                  </Text>
                </View>
                <AirbnbRating
                  defaultRating={walk.rating}
                  showRating={false}
                  isDisabled={true}
                  count={5}
                  selectedColor={'#F9CC33'}
                  starStyle={{
                    marginRight: 3,
                    width: 11,
                    height: 11,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
    });
  }

  render() {
    return (
      <ScrollView style={tracker.walkScroll}>{this.walkList()}</ScrollView>
    );
  }
}

export default WalkList;
