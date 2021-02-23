import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './modules/dashboard/Dashboard';
import Tracker from './modules/tracker/Tracker';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={'#ffffff'}
        translucent={false}
        barStyle={'default'}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" headerMode={'none'}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Tracker" component={Tracker} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
