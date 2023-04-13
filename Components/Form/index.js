import { View, Text,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import {React,useState} from 'react'
import styles  from './style'
export default function index(prop) {
  const [task,settask]=useState('')
  const addTask=()=>{
    if(task.length===0){
      alert('Vui lòng nhập task')
    }else
    {
     prop.onAddTask(task);
     settask('')
    }
  }
  return (
    <><KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={5} /><><View style={styles.textinput}>
        <TextInput value={task} onChangeText={text=>settask(text)} placeholder='Text here'></TextInput>
      </View>
        <TouchableOpacity style={styles.footerbtn}
          onPress={addTask}
        >
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity></></>
  )
}