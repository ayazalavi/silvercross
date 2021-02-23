import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import tracker from '../styles/tracker';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
import HeaderButton from '../common/HeaderButton';

class FindWalkForm extends Component {
  constructor(props) {
    super(props);
    console.log('reset');
    this.state = {
      selected: props.selected,
      postcode: props.postcode,
      distance: props.distance,
      type: props.type,
    };
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
      <View style={tracker.form}>
        <Text style={tracker.formTitle}>Explore stroller friendly walks</Text>
        <View style={tracker.greenBorder} />
        <View style={tracker.formInputCont}>
          <TextInput
            style={tracker.formInput}
            placeholder={'Postcode, Town or city'}
            placeholderTextColor={'rgba(122, 131, 142, 0.5)'}
            onChange={({nativeEvent}) =>
              this.setState((prevState) => ({postcode: nativeEvent.text}))
            }
            value={this.state.postcode}
          />
          <Image
            source={require('../../assets/search.png')}
            style={tracker.formIcon}
          />
        </View>
        <View style={tracker.distance}>
          <View>
            <Text style={tracker.distanceLabel}>Distance?</Text>
            <Text style={tracker.distanceMiles}>
              {this.state.distance} miles
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 40}}>
            <Slider
              style={{width: '100%'}}
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={this.state.distance}
              minimumTrackTintColor="rgba(122,131,142, 0.1)"
              maximumTrackTintColor="rgba(122,131,142, 0.1)"
              thumbTintColor={'#64CFD1'}
              onValueChange={(value) =>
                this.setState((prevState) => ({distance: value}))
              }
            />
          </View>
        </View>
        <View style={tracker.terrain}>
          <View>
            <Text style={tracker.distanceLabel}>I’m looking for?</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                value={this.state.type.childFriendly}
                onCheckColor={'#fff'}
                onTintColor={'#64CFD1'}
                onFillColor={'#64CFD1'}
                style={{width: 17, height: 17, marginRight: 10}}
                onValueChange={(value) =>
                  this.setState((prev) => ({
                    type: {childFriendly: value, flat: prev.type.flat},
                  }))
                }
              />
              <Text style={tracker.distanceMiles}>Child Friendly</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                value={this.state.type.flat}
                onCheckColor={'#fff'}
                onTintColor={'#64CFD1'}
                onFillColor={'#64CFD1'}
                style={{width: 17, height: 17, marginRight: 10}}
                onValueChange={(value) =>
                  this.setState((prev) => ({
                    type: {childFriendly: prev.type.childFriendly, flat: value},
                  }))
                }
              />
              <Text style={tracker.distanceMiles}>Flat Terrain</Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <HeaderButton
            onPress={() => this.props.onSubmit(this.state)}
            style={tracker.formButton}
            styleText={tracker.formButtonText}
            text={'Find a walk'}
          />
        </View>
      </View>
    );
  }
}

export default FindWalkForm;
