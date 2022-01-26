import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: '4%',
        justifyContent: 'space-between',
        marginBottom:'3%'
    },
    budgetbuy: {
        width: Dimensions.get('window').width / 2 - 30,
        height: 230,
        marginVertical: '3%',
    }
})
export default styles;