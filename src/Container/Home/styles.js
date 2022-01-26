import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
    },
    icon: {
        flexDirection: 'row',
        marginLeft: '25%'
    },
    item: {
        backgroundColor: '#f9c2ff',
        width: 60,
        height:60,
        borderRadius: 50,
        marginHorizontal:10,
    },
    title: {
        fontSize: 10,
        color:'#000',
        textAlign:'center',
        fontWeight:'400'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    salebanner:{
        width: Dimensions.get('window').width,
        height: 230,
        marginVertical:'3%'
    },
})
export default styles;