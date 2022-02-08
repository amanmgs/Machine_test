import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import styles from './styles';
import HeaderIcon from '../../Component/HeaderIcon';
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {

  const { navigation } = props;
  const [text, onChangeText] = useState("");
  const [input, setinput] = useState("");
  const [editindex, seteditindex] = useState();
  const [visible, setVisible] = useState(false);

  const renderItem = ({ item, index }) => (
    <View style={styles.list}>
      <HeaderIcon name={'dot-circle'} />
      <Text style={styles.title}>{item.title}</Text>
      <HeaderIcon name={'user-edit'} onPress={() => editElement(index)} />
      <HeaderIcon name={'trash'} onPress={() => deleteElement(index)} />
    </View>
  );


  const addElement = async() => {
    if(text.trim().length !== 0){
    var newArray = [...props.Listitem, { title: text }];
    props.additem(newArray);
    setlist(newArray);
    }
  }

  const deleteElement = (index) => {
    var newArray = [...props.Listitem].filter((val) => val != props.Listitem[index]);
    props.deleteitem(newArray);
    setlist(newArray);
  }

  const editElement = (index) => {
    setVisible(true);
    seteditindex(index);
  }

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {
    setVisible(false);
    props.Listitem[editindex].title = input;
    props.edititem(props.Listitem);
    setlist(props.Listitem);
  };

  const setlist = async(data) =>{
    try {
        await AsyncStorage.setItem('item', JSON.stringify(data))
    }catch (err){
        console.log(err)
    }
  }


  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <Text style={{ color: 'black', paddingVertical: 8, fontSize: 16, fontWeight: '500' }}>Todo List</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add an item!"
            placeholderTextColor={'#999'}
            autoCorrect={false}
            onChangeText={onChangeText}
          />
          <TouchableOpacity style={{}}
            onPress={() => addElement()}
          >
            <Text style={styles.button}>{'ADD'}</Text>
          </TouchableOpacity>
        </View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Edit</Dialog.Title>
          <Dialog.Input
            onChangeText={text => setinput(text)}
            value={input}
          >
          </Dialog.Input>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Save" onPress={handleSave} />
        </Dialog.Container>
        <FlatList
          data={props.Listitem}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          style={{ marginTop: '5%', marginBottom: '3%' }}
        />
      </View>
    </View>
  );
}

function mapStatetoprops(state) {
  return {
    Listitem: state.Listitem
  }
}

function mapDispatchtoprops(dispatch) {
  return {
    additem: (payload) => dispatch({ type: 'ADD_ITEM', payload: payload }),
    deleteitem: (payload) => dispatch({ type: 'DELETE_ITEM', payload: payload }),
    edititem: (payload) => dispatch({ type: 'EDIT_ITEM', payload: payload })
  }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(Home);