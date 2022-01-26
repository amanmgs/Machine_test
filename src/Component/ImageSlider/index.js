import React from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { useNavigation } from '@react-navigation/native';

const ImageSlider = (props) => {

    const navigation = useNavigation();

    const {
        data,
        width,
        height,
        indicator,
        autoscroll,
        screen
    } = props;


    return (
        <View style={{backgroundColor:'#fff', marginBottom:'3%'}}>
        <FlatListSlider
          data={data}
          width={width}
          height={height}
          indicator={indicator}
          onPress={(item, index) => screen != 'detail' ? navigation.navigate('Product_Listing') : null}
          separatorWidth={10}
          indicatorContainerStyle={{ bottom: 9}}
          indicatorActiveColor={'red'}
          imageKey={'image'}
          autoscroll={autoscroll}
        />
        </View>
    )
}

export default ImageSlider;
