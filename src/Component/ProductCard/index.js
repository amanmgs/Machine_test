import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ProductCard = (props) => {
    const navigation = useNavigation();
    const {
        uri_1,
        uri_2,
    } = props;


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Product_Listing')}>
                <Image
                    style={styles.budgetbuy}
                    source={{
                        uri: uri_1,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Product_Listing')}>
                <Image
                    style={styles.budgetbuy}
                    source={{
                        uri: uri_2,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard;
