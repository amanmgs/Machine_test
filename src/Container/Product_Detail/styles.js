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
        marginLeft: '38%'
    },
    image: {
        width: Dimensions.get('window').width,
        marginTop: '3%',
    },
    rating: {
        backgroundColor: '#808080',
        height: 23,
        width: 40,
        marginLeft: '3%',
        marginTop: '1%',
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    productname: {
        color: 'black',
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: '500'
    },
    mainheadingdesc: {
        color: '#000',
        fontWeight: '700',
        marginLeft: '3%'
    },
    subdescheading: {
        color: '#000',
        fontWeight: '500',
        marginLeft: '3%'
    },
    desc: {
        color: '#000',
        marginLeft: '3%',
        marginBottom: '3%',
        fontWeight: '300'
    },
    btn: {
        backgroundColor: '#fa2a55',
        paddingVertical: 15,
        marginBottom: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: '3%',
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width - 23
    },
    btntext: {
        color: '#fff',
        fontWeight: '500',
    }
})
export default styles;