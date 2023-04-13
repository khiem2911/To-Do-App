import { StyleSheet } from 'react-native'
import color from '../contains/color'
const styles=StyleSheet.create({
    textinput:{
        flex:4,
        backgroundColor:'white',
        marginHorizontal:30,
        borderRadius:50,
        justifyContent:'center',
        paddingLeft:30,
        borderColor:color.primary,
        borderWidth:1
      },
      footerbtn:{
        flex:1,
        alignItems:'center',
        marginRight:20,
        backgroundColor:color.primary,
        width:40,
        height:40,
        borderRadius:100
      },
      txt:{
        color:'white',
        fontSize:30
      }
})
export default styles;
