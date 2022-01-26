import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import HeaderIcon from '../../Component/HeaderIcon';
import ImageSlider from '../../Component/ImageSlider';
import ProductListingCard from '../../Component/ProductListingCard'

const Banner_2 = [
  {
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/9/14/72bdd07c-4b7b-4d91-ad6c-c67727943fcb1631596594300-EXTRA_01.jpg'
  },
  {
    image: 'https://i.pinimg.com/originals/3b/f5/32/3bf5329387752da6456bdedd46351689.jpg',
  },
  {
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/9/14/a9499cc2-5a90-4a3d-a98a-b9ef40742eae1631596594305-EXTRA_03.jpg',
  },
]

const Product_data = [
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2021/3/26/91ee6983-b2f6-4309-93b1-c34fbf533a811616739117438-Anouk-Women-Peach-Coloured-Embroidered-Kurta-with-Palazzos-8-4.jpg',
    name: 'Anouk',
    desc: 'Women Pink Embroidered Kurta with Palazzos',
  },
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056866/2019/12/9/67a0d919-cbca-4d89-a8f1-6a25c9e9305c1575891613300-Round-NeckWith--34th-Sleeve-Straight-Floral-print-Crepe-Kurt-1.jpg',
    name: 'Ziyaa',
    desc: 'Floral Leafy Foil Print Kurta Set'
  },
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8969717/2019/3/28/e448c9a1-3a0f-40e7-b267-1bf44a44ba501553778956208-Indo-Era-Beige-Solid-Straight-Kurta-Sets-9801553778954623-1.jpg',
    name: 'Indo Era',
    desc: 'Muted Hazelnut Geometric Yoke Kurta Set',
  },
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10698556/2019/10/11/d99f0b83-101e-46b2-bab9-a67142a660de1570772680439-anayna-Women-Beige--Green-Printed-Kurta-with-Trousers-187157-1.jpg',
    name: 'Anayna',
    desc: 'Women Beige & Green Printed Kurta with Trousers',
  },
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/29/f1ce15dc-89fc-4b75-9df8-4451b14cca691580249433684-1.jpg',
    name: 'Mitera',
    desc: 'Teal Blue & Gold-Toned Silk Blend Woven Design Banarasi Saree',
  },
  {
    uri: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16189012/2021/12/7/6faa5fa3-9950-4ef7-8625-6670aca8d0961638853653014-Lime-green--Pink-Embellished-net-ruffle-saree-66716388536526-1.jpg',
    name: 'Tikhi Imli',
    desc: 'Cream Saree'
  },
]


const Product_Listing = (props) => {

  const { navigation } = props;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Product_Detail',{item:item})}>
    <ProductListingCard
      uri={item.uri}
      name={item.name}
      desc={item.desc}
    />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <HeaderIcon name={'arrow-left'} onPress={() => navigation.goBack()} />
            <Text style={{ color: 'black', paddingVertical: 8, fontSize: 16, fontWeight: '500' }}>PRODUCT LIST</Text>
            <View style={styles.icon}>
              <HeaderIcon name={'search'} />
              <HeaderIcon name={'heart'} />
              <HeaderIcon name={'shopping-bag'} />
            </View>
          </View>
        </View>
        <View style={styles.salebanner}>
          <ImageSlider data={Banner_2} width={Dimensions.get('window').width} height={120} indicator={false} />
        </View>
        <FlatList
          data={Product_data}
          renderItem={renderItem}
          keyExtractor={(item,index) => index}
          numColumns={2}
          key={2}
        />
      </ScrollView>
    </View>
  );
}


export default Product_Listing;