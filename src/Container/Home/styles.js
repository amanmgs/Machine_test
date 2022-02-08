import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent:'center',
        borderBottomWidth:1
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1
    },
    title: {
        flex: 1,
        padding: 5,
        borderBottomColor: '#bbb',
        fontSize: 14,
        color:'#000'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth:1
    },
    input: {
        flex: 1,
        padding: 5,
        borderBottomColor: '#bbb',
        fontSize: 14,
        marginLeft: 20,
        color:'#000'
    },
    button: {
        marginRight: 5,
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400',
        backgroundColor:'#fa2a55',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5
    },
})
export default styles;