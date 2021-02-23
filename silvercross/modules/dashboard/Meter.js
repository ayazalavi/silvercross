import React, {Component} from 'react';
import {View, Image, Animated, Easing, Text} from 'react-native';
import dashboard from '../styles/dashboard';
import SegmentedRoundDisplay from 'react-native-segmented-round-display';
import {AQI_TITLE} from '../common/Consants';

class Meter extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.degrees = this.convertAQItoDegrees({aqi: props.aqi});
    const spin = this.animated.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    this.transform = [{rotate: spin}];
  }

  componentDidMount() {
    this.rotateDot();
  }

  rotateDot() {
    Animated.timing(this.animated, {
      toValue: this.degrees,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  componentDidUpdate(prevProp, prevState) {
    this.degrees = this.convertAQItoDegrees({aqi: this.props.aqi});
    this.rotateDot();
  }

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  convertAQItoDegrees({aqi}) {
    const [minAQI, maxAQI] = [0, 500];
    const degress = ((aqi - minAQI) * (360 - 0)) / (maxAQI - minAQI) + 0;
    return degress;
  }

  /* polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    var start = this.polarToCartesian(x, y, radius, startAngle);
    var end = this.polarToCartesian(x, y, radius, endAngle);

    var d = [
      'M',
      x,
      y,
      'A',
      radius,
      radius,
      0,
      endAngle - 180 > 180 ? 1 : 0,
      1,
      0,
      0,
    ];
    return d.join(' ');
  } */

  componentDidCatch(error, errorInfo) {}
  render() {
    return (
      <View style={dashboard.meter}>
        <Image
          source={require('../../assets/meter_colors.png')}
          style={dashboard.metersCircle}
        />
        <Image
          source={require('../../assets/meter_dashes.png')}
          style={dashboard.metersDashes}
        />
        <View style={dashboard.metersReading}>
          <Text style={dashboard.metersTitle}>{this.props.aqi}</Text>
          <Text style={dashboard.metersSubtitle}>Air Quality Score</Text>
        </View>
        <SegmentedRoundDisplay
          displayValue={true}
          radius={125}
          filledArcWidth={10}
          emptyArcColor={'rgba(0,0,0,0)'}
          incompleteArcColor={'#49D4D7'}
          filledArcColor={'#49D4D7'}
          formatValue={(value) => AQI_TITLE({pm10: value})}
          animationDuration={1000}
          totalArcSize={360}
          valueBoxColor={'rgba(255,255,255,0.4)'}
          valueFontColor={'#49D4D7'}
          segments={[
            {
              total: 360,
              filled: this.degrees,
            },
          ]}
        />
        <Animated.View
          style={{...dashboard.metersStatus, ...{transform: this.transform}}}>
          <Image
            source={require('../../assets/meter_pointer.png')}
            style={dashboard.metersDot}
          />
        </Animated.View>
      </View>
    );
  }
}

export default Meter;
