import { StyleSheet } from 'react-native'
import color from '../contains/color'
const styles=StyleSheet.create({
    item:{
        flexDirection:"row",
        backgroundColor:color.white,
         marginBottom:15,
         paddingVertical:5,
         paddingHorizontal:20,
         marginHorizontal:20,
         borderRadius:100,
         justifyContent:'space-between',
         alignItems:'center'
       }, 
       square:{
        width:48,
        height:36,
        borderRadius:30,
        backgroundColor:'#ffae',
        alignItems:'center',
        justifyContent:'center'
      },
      content:{
        width:'80%',
        fontSize:16
      }
})
export default styles;
