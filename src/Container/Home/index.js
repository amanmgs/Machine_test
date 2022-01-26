import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import styles from './styles';
import HeaderIcon from '../../Component/HeaderIcon';
import ImageSlider from '../../Component/ImageSlider';
import ProductCard from '../../Component/ProductCard'

const DATA = [
  {
    id: '0',
    title: 'MEN',
    uri: 'https://m.media-amazon.com/images/I/81HwTrJvaJL._UL1500_.jpg',
  },
  {
    id: '1',
    title: 'WOMEN',
    uri: 'https://images.unsplash.com/photo-1529232356377-57971f020a94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjU5MDA4fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  },
  {
    id: '2',
    title: 'KIDS',
    uri: 'https://i.pinimg.com/originals/fa/a6/9a/faa69ae66fac07fcc7ff8d6ed76e4c86.jpg',
  },
  {
    id: '3',
    title: 'Home',
    uri: 'https://m.media-amazon.com/images/I/A14TofqDVtL._SL1500_.jpg',
  },
  {
    id: '4',
    title: 'JEWELLERY',
    uri: 'https://media.istockphoto.com/photos/jewelry-on-window-display-picture-id155013169?k=20&m=155013169&s=612x612&w=0&h=N3onsq576y3N26LQzpQHfpmfDKykFnTKHaFkZqcCKeg=',
  },
  {
    id: '5',
    title: 'BEAUTY',
    uri: 'https://media.istockphoto.com/photos/makeup-palette-and-brushes-professional-eyeshadow-palette-picture-id1299164489?b=1&k=20&m=1299164489&s=170667a&w=0&h=GqoYQHfqq4UfbHFq9TlUp3isRCAqm9hoFqnxaKUEQEU=',
  },
];


const Banner_1 = [
  {
    image:'https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1-1200x275.jpg'
  },
  {
    image: 'https://assets.myntassets.com/assets/images/retaillabs/2021/9/24/5cad4760-8baa-49b2-ba61-f5e726eed5a31632491715639-HP-Banner-thin.jpg',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgJBrrgjiIZcBgWcwpPcO3aZqlQJ_3ClKgcim15hwzy_WPELwspxx7YNxzRVoPm7VWEM&usqp=CAU',
  },
  {
    image: 'https://cdn.static-zoutons.com/images/originals/blog/main-banner_(33)_1634731186.png',
  },
]

const Banner_2 = [
  {
    image:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/9/14/72bdd07c-4b7b-4d91-ad6c-c67727943fcb1631596594300-EXTRA_01.jpg'
  },
  {
    image: 'https://i.pinimg.com/originals/3b/f5/32/3bf5329387752da6456bdedd46351689.jpg',
  },
  {
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/9/14/a9499cc2-5a90-4a3d-a98a-b9ef40742eae1631596594305-EXTRA_03.jpg',
  },
]

const UnbelievableDeals = [
  {
    image:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/a92610b0-31b8-4956-abf6-a8b221d552051641702713619-Varanga-_Indo_Era.jpg'
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/29251292-6dfd-42ff-96f3-b11dccd852041641702713416-Roadster_.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/c4d9620f-d8e6-4b4b-a5e8-c3a8b64f3cdb1642129866124-22.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/11f7bfd7-fb66-4113-910c-32da0fef83351641702712780-Cutecumber_-_Stylobug.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/75768bd3-39b4-46a0-99fd-022893792ad41641966742815-Sojanya-_Deyann.jpg',
  },
]

const TopBrandsOffer = [
  {
    image:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2c1ff1c8-ac34-428f-8b0c-4bbfbf75bfe51641877277850-Mothercare.jpg'
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/2218abb9-e40f-4e43-abce-dfb022e34f671641877277825-Levis.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/3a7dbe60-6aab-4d5e-8b05-aff113dba13e1641877277893-UCB_1.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/f559ad84-915d-470b-83b1-cf7c889a6a391641877277877-U.S._Polo_Assn..jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/787a36a1-b57d-4c96-8057-ff80748abee71641877277817-Jack_-_Jones.jpg',
  },
]

const MostLovedBrands = [
  {
    image:'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/e29cd784-b6ee-4e2e-9807-d631c5d062cb1642011117202-Libas_HP-Top-Tile.jpg'
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c46aecf8-af8b-438e-8e0a-82a4c2671c651642011117216-Vishudh_HP-Top-Tile.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/901bb1a2-6d87-44b0-af68-33e3949dfedf1642057411431-levis.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/49d665a9-daf6-4bf4-9534-803cf18731b61642052041267-Lakme_HP-Tile_Jan-15_Revised.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/ce6a4f0f-d21c-4cb4-92cd-ceff11d539901642050725137-Loreal.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0b6d70ea-809b-4a83-88fa-edfac575418f1642070092339-image_jpeg1610275137.jpg',
  },
  {
    image: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/72647bad-dd76-447d-9eab-b5254cb989631642069093033-boat-home.jpg',
  },
]


const Home = (props) => {

  const { navigation } = props;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product_Listing')}
    >
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: item.uri,
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <HeaderIcon name={'bars'} />
            <Text style={{ color: 'black', paddingVertical: 8, fontSize: 16, fontWeight: '500' }}>Myntra</Text>
            <View style={styles.icon}>
              <HeaderIcon name={'search'} />
              <HeaderIcon name={'bell'} />
              <HeaderIcon name={'heart'} />
              <HeaderIcon name={'shopping-bag'} />
            </View>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            style={{ marginTop: '5%', marginBottom: '3%' }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product_Listing')}
        >
          <Image
            style={styles.salebanner}
            source={{
              uri: 'https://www.dealsmagnet.com/images/external/myntra-pay-day-sale-16qmxa3W-2.jpeg?url=https%3A%2F%2Fi.imgur.com%2Ff2VI23z.png',
            }}
          />
        </TouchableOpacity>
        <ImageSlider data={Banner_1}  width={Dimensions.get('window').width} height={120}/>
        <ImageSlider data={Banner_2}  width={Dimensions.get('window').width} height={120}/>
        <Text style={{ marginBottom: '3%', color: 'darkorange', fontSize:16, fontWeight:'500', textAlign:'center', textDecorationLine:'underline' }}>UNBELIEVABLE DEALS</Text>
        <ImageSlider data={UnbelievableDeals}  width={230} height={300} indicator={false} autoscroll={false}/>
        <Text style={{ marginBottom: '3%', color: 'darkorange', fontSize:16, fontWeight:'500', textAlign:'center', textDecorationLine:'underline' }}>TOP BRANDS ON OFFER</Text>
        <ImageSlider data={TopBrandsOffer}  width={230} height={300} indicator={false} autoscroll={false}/>
        <Text style={{ marginBottom: '3%', color: 'darkorange', fontSize:16, fontWeight:'500', textAlign:'center', textDecorationLine:'underline' }}>BUDGET BUYS</Text>
        <ProductCard 
        uri_1={'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/10/41fff373-3403-4179-85c3-28ab311aad8f1641797994942-Anouk_Kurta-_Kurta_Sets_-_Saress_-_Min_60_OFF.jpg'}
        uri_2={'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5046ca81-d40b-4669-99ac-8ca35fa1e06a1641884921452-RTF-Winterwear_Pantaloons.jpg'}
        />
        <ProductCard 
        uri_1={'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/3a7dbe60-6aab-4d5e-8b05-aff113dba13e1641877277893-UCB_1.jpg'}
        uri_2={'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/21e0c14a-b3a5-4b0f-857e-e3f1296bbc3c1641961373240-UTH_by_Roadster.jpg'}
        />
        <Text style={{ marginBottom: '3%', color: 'darkorange', fontSize:16, fontWeight:'500', textAlign:'center', textDecorationLine:'underline' }}>MOST LOVED BRANDS</Text>
        <ImageSlider data={MostLovedBrands}  width={230} height={300} indicator={false} autoscroll={false}/>
      </ScrollView>
    </View>
  );
}


export default Home;