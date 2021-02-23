import React, {Component} from 'react';
import {View} from 'react-native';
import {HEADER_DASHBOARD, HEADER_TRACKER} from '../common/Consants';
import Header from '../common/Header';
import Tab from '../common/Tab';
import dashboard from '../styles/dashboard';
import Meter from './Meter';
import Readings from './Readings';
import Banners from './Banners';
import Toggle from '../common/Toggle';
import Alert from '../common/Alert';
import BLE from '../common/BLE';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aqi: {pm1: 0, pm25: 0, pm10: 0, voc: 0},
      temperature: 0,
      humidity: 0,
    };
  }

  componentDidMount() {
    this.configureBLE();
  }

  configureBLE() {
    this.ble = new BLE(1000, this.onConnected.bind(this));
  }

  onConnected = () => {
    // console.log('on connected called');
    setTimeout(this.requestData, this.ble.ping_frequency);
  };

  requestData = () => {
    if (this.ble.connected) {
      const requestStartTime = Date.now();
      this.ble
        .request()
        .then(async (data1) => {
          const requestReceiveTime = Date.now();
          const data2 = JSON.parse(data1);
          //  console.log('data received: ' + data2.pm1);
          this.setState((prevState) => ({
            aqi: {
              pm1: data2.pm1,
              pm25: data2.pm25,
              pm10: data2.pm10,
              voc: data2.voc,
            },
            temperature: data2.temperature,
            humidity: data2.humidity,
          }));
          setTimeout(
            this.requestData,
            this.ble.ping_frequency - (requestReceiveTime - requestStartTime),
          );
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  componentDidUpdate(prevProp, prevState) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  showAlert() {
    if (this.ble === undefined || !this.ble.connected)
      return (
        <Alert
          title={'Connection Status'}
          message={'Connecting to hardware, please wait ...'}
          url={''}
        />
      );
    else if (this.state.temperature > 25)
      return (
        <Alert
          title={'Temperature alert'}
          message={
            'The temperature around your child is very high, Children overheat 5 times faster than adults in hot weather.'
          }
          url={''}
        />
      );
    else if (this.state.temperature < 5)
      return (
        <Alert
          title={'Temperature alert'}
          message={'The temperature around your child is very low'}
          url={''}
        />
      );
    else if (this.state.aqi.pm10 > 50)
      return (
        <Alert
          title={'Air pollution alert'}
          message={
            'The air pollution from road traffic is probably high in current location, We moving through the area quickly until air quality improves.'
          }
          url={''}
        />
      );
  }
  render() {
    return (
      <View style={dashboard.container}>
        <Header
          selected={HEADER_DASHBOARD}
          navigate={(selected) => {
            if (selected === HEADER_TRACKER) {
              this.props.navigation.navigate('Tracker');
            }
          }}
        />
        <Meter aqi={this.state.aqi.pm10} />
        <Readings
          pm1={this.state.aqi.pm1}
          pm25={this.state.aqi.pm25}
          pm10={this.state.aqi.pm10}
          voc={this.state.aqi.voc}
        />
        <Banners
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          temperatureAlert={
            this.state.temperature > 25 || this.state.temperature < 5
          }
        />
        <Toggle on={this.state.ble} />
        <Tab />
        {this.showAlert()}
      </View>
    );
  }
}

export default Dashboard;
