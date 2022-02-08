import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'
import StackNavigator from './navigation'
import { LogBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


LogBox.ignoreLogs([
  "VirtualizedLists should never be nested",
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = (props) => {
const [list, setlist] = useState([])

useEffect(()=>{
  getlist()
}, [])

const getlist = async() =>{
  try {
    let data = await AsyncStorage.getItem('item')
    data ? setlist(JSON.parse(data)) : []
  }catch (err){
      console.log(err)
  }
}
  
const initialState = {
  Listitem: list
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        Listitem: action.payload
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        Listitem: action.payload
      }
    case 'EDIT_ITEM':
      return {
        ...state,
        Listitem: action.payload
      }
  }
  return state
}

const store = createStore(reducer)

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}


export default App;