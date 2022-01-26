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
        marginLeft: '20%'
    },
    salebanner:{
        width: Dimensions.get('window').width-17,
        marginVertical:'3%',
        marginHorizontal:'2.5%',
    },
})
export default styles;