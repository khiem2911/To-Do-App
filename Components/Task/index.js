import React from 'react'
import { View, Text,TouchableOpacity,Alert } from 'react-native'
import styles from './style'
const task = (prop) => {
  return (
    <TouchableOpacity onLongPress={()=>Alert.alert("Delete","Do You Want To Delete",[
      {text:"YES",onPress:()=>prop.delete(prop.num) },
      {text:"NO"}
    ])}>
    <View  style={styles.item}>
      <View style={styles.square}><Text style={styles.number}>{prop.num}</Text></View>
      <Text style={styles.content} >{prop.text}</Text>
    </View >
    </TouchableOpacity>
  )
}
export default task;