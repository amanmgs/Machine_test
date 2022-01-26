import React, { useEffect, useState } from 'react';
import {Text} from 'react-native'
import StackNavigator from './navigation'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested",
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = (props) => {
  return (
    <StackNavigator/>
  );
}


export default App;