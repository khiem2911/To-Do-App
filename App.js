import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task'; 
import Form from './Components/Form'; 
import color from './Components/contains/color'
import { useState } from 'react';
export default function App() {
  const [state,setstate]=useState([])
  const handelTask=(task)=>{
    setstate([...state,task])
  }

  const handelDelete=(index)=>{
    state.splice(index,1)
    const newstate=[...state]
    setstate([...newstate])
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
           {
            state.map((item,index)=>{
              return <Task delete={handelDelete} text={item} num={index} />
            })
           }
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Form onAddTask={handelTask} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  body:{
    flex:17,
    paddingTop:30,
  
  },
  footer:{
    flex:1,
    flexDirection:'row',
    marginBottom:20
  },
  
  header:{
    fontSize:30,
    color:color.primary,
    fontWeight:'bold',
    paddingTop:10
  },
  button:{
    
  },
  items:{
    marginTop:15,
  },
  
});
