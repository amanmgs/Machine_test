import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom:'3%',
        marginLeft:'5%'
    },
    budgetbuy: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 230,
    },
    productcontainer:{
        width: Dimensions.get('window').width / 2 - 19,
        height: 350,
        borderWidth:0.5,
        marginVertical: '3%',
    },
    name : {
        color:'#000',
        fontWeight:'500',
        marginHorizontal:'5%',
        marginTop:'2%',
        fontSize:12
    },
    desc :{
        color:'#000',
        fontWeight:'300',
        marginHorizontal:'5%',
        fontSize:12
    },
    rating:{
        backgroundColor:'#808080',
        height:23,
        width:40,
        marginLeft:'5%',
        marginTop:'4%',
        borderRadius:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default styles;