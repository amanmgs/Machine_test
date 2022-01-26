import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import HeaderIcon from '../../Component/HeaderIcon';
import ImageSlider from '../../Component/ImageSlider';
import Icon from 'react-native-vector-icons/FontAwesome5';



const Product_Detail = (props) => {

  const { navigation, route } = props;

  const Banner_2 = [
    {
      image: route.params.item.uri
    },
  ]

  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]} style={{ marginBottom: '15%' }}>
        <View style={{ backgroundColor: '#000' }}>
          <View style={styles.header}>
            <HeaderIcon name={'arrow-left'} onPress={() => navigation.goBack()} />
            <Text style={styles.productname}>{route.params.item.name}</Text>
            <View style={styles.icon}>
              <HeaderIcon name={'search'} />
              <HeaderIcon name={'heart'} />
              <HeaderIcon name={'shopping-bag'} />
            </View>
          </View>
        </View>
        <View style={styles.image}>
          <ImageSlider data={Banner_2} width={Dimensions.get('window').width} height={450} screen={'detail'}/>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: '-3%', }}>
          <Text style={{ color: '#000', marginLeft: '3%' }}>
            <Text style={{ fontWeight: '700' }}>{route.params.item.name} </Text>
            <Text >{route.params.item.desc}</Text>
          </Text>
          <Text style={{ color: '#000', marginLeft: '3%', }}>
            <Text style={{ color: 'grey', textDecorationLine: 'line-through' }}>₹499</Text>
            <Text style={{ fontWeight: '700', }}>  ₹249</Text>
            <Text style={{ color: 'orange', fontWeight: '500' }}>  (50%)</Text>
          </Text>
          <Text style={{ color: 'grey', fontWeight: '400', marginLeft: '3%', fontSize: 12 }}>inclusive of all taxes</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.rating}>
              <Text style={[{ textAlignVertical: 'center', color: '#fff', fontSize: 12 }]}>{'4.5'}</Text>
              <Icon name={'star'} color={'#fff'} size={10} />
            </View>
            <Text style={[{ textAlignVertical: 'center', marginTop: '-2%', marginLeft: '2%', fontSize: 12, color: '#000' }]} numberOfLines={1}>{'4.5k Ratings'}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: '3%' }}>
          <Text style={styles.mainheadingdesc}>PRODUCT DETAILS</Text>

          <Text style={styles.subdescheading}>Design Details:</Text>
          <Text style={styles.desc}>
            Teal and Gold-toned banarasi woven design saree and has a woven design border
            Blouse Piece
            The model is wearing a stitched version of the blouse piece. The saree comes with an unstitched blouse piece
          </Text>
          <Text style={styles.subdescheading}>Origin:</Text>
          <Text style={styles.desc}>
            Banarasi sarees originate from the city of Varanasi (Uttar Pradesh). These are well known for the Mughal Era inspired designs in golden as well as silver brocade or Zari.
          </Text>
          <Text style={styles.subdescheading}>Size & Fit:</Text>
          <Text style={styles.desc}>
            Length: 5.5 metres plus 0.8 metre blouse piece
            Width: 1.06 metres (approx)
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Product_Detail;