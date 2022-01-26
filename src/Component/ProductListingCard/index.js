import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductListingCard = (props) => {
    const navigation = useNavigation();
    const {
        uri,
        name,
        desc,
    } = props;


    return (
        <View style={styles.container}>
            <View style ={styles.productcontainer}>
                <Image
                    style={styles.budgetbuy}
                    source={{
                        uri: uri,
                    }}
                />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc} numberOfLines={1}>{desc}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.desc, {color:'grey', textDecorationLine:'line-through',marginHorizontal:'2%', marginLeft:'5%'}]} >{'₹499'}</Text>
                <Text style={[styles.desc, {color:'black',marginHorizontal:'2%', fontWeight:'500'}]} >{'₹249'}</Text>
                <Text style={[styles.desc,{marginHorizontal:'2%', color:'orange', fontWeight:'400'}]} >{'50% OFF'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={styles.rating}>
                <Text style={[styles.name,{textAlignVertical:'center', color:'#fff'}]}>{'4.5'}</Text>
                <Icon name={'star'} color={'#fff'} size={10} />
                </View>
                <Text style={[styles.desc,{textAlignVertical:'center', marginTop:'4%'}]} numberOfLines={1}>{'4.5k Ratings'}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductListingCard;
