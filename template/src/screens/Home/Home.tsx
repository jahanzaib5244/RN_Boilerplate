import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  ImageRequireSource,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IMAGES_PATH from '../../constants/IMAGES_PATH';
import {exploreButtons, nearby_foods, sights} from '../../constants/AppContent';

interface exploreBtn {
  name: string;
  icon: ImageRequireSource;
}
interface nearByFood {
  name: string;
  address: string;
  image: ImageRequireSource;
}

const ExploreBtn = ({item}: {item: exploreBtn}) => {
  return (
    <View style={styles.exp_btn}>
      <View style={styles.image_wrapper}>
        <Image source={item.icon} />
      </View>
      <Text style={styles.exp_btn_txt}>{item?.name}</Text>
    </View>
  );
};

const NearByFood = ({item}: {item: nearByFood}) => {
  return (
    <View style={styles.food_item}>
      <Image source={item?.image} style={styles.food_image} />
      <View style={styles.item_content}>
        <View>
          <Text style={styles.food_name}>{item?.name}</Text>
          <Text style={styles.food_address}>{item?.address}</Text>
        </View>
        <Image source={IMAGES_PATH.add} style={styles.add_icon} />
      </View>
    </View>
  );
};

const PopularSights = ({item}: {item: nearByFood}) => {
  return (
    <View style={styles.sight}>
      <View style={styles.sight_img_wrapper}>
        <Image source={item?.image} style={styles.sight_image} />
      </View>
      <View style={styles.sight_content}>
        <View>
          <Text style={styles.sight_name}>{item?.name}</Text>
          <Text style={styles.sight_address}>{item?.address}</Text>
        </View>
        <Image source={IMAGES_PATH.add} />
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.root}>
      <ImageBackground
        source={IMAGES_PATH.background}
        style={styles.header_container}>
        <Image source={IMAGES_PATH.home_vector} style={styles.home_vector} />
        <View style={styles.header_content}>
          <View style={styles.icon_container}>
            <Image source={IMAGES_PATH.home_icon} style={styles.icon} />
            <Text style={styles.heading}>Beeba</Text>
          </View>
          <View style={styles.noti_container}>
            <Image source={IMAGES_PATH.bell} style={styles.bell_icon} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content_container}>
        {/* search input  */}
        <View style={styles.search_container}>
          <Text>Where Would you like to go</Text>
          <Image source={IMAGES_PATH.search} />
        </View>
        {/* explore section  */}
        <View style={styles.explore_container}>
          <Text style={styles.explore_txt}>Explore</Text>
          <View style={styles.buttons_continer}>
            {exploreButtons.map((item, index) => (
              <ExploreBtn key={index} item={item} />
            ))}
          </View>
        </View>
        {/* Nearby Food  */}
        <View style={styles.nearby_food}>
          <View style={styles.heading_container}>
            <Text style={styles.section_title}>Nearby Food Point</Text>
            <Text style={styles.v_all_txt}>View All</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll_view}
            bounces={false}>
            {nearby_foods.map((item, index) => (
              <NearByFood item={item} key={index} />
            ))}
          </ScrollView>
        </View>

        {/* popular sights */}
        <View style={styles.sights_container}>
          <View style={styles.heading_container}>
            <Text style={styles.section_title}>Polular Sights</Text>
            <Text style={styles.v_all_txt}>View All</Text>
          </View>
        </View>
        <View style={styles.sights_wrapper}>
          {sights.map((item, index) => (
            <PopularSights item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
