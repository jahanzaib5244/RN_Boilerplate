import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import IMAGES_PATH from '../../constants/IMAGES_PATH';
import {styles} from './styles';
import {ratings} from '../../constants/AppContent';

interface review {
  name: string;
  description: string;
  date: string;
}
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.heading_container}>
        <Image style={styles.back_icon} source={IMAGES_PATH.left_arrow} />
        <Text style={styles.heading}>Rating</Text>
      </View>
      <Image style={styles.noti_icon} source={IMAGES_PATH.noti} />
    </View>
  );
};

const ReviewCard = ({item}: {item: review}) => {
  return (
    <View style={styles.rating_card}>
      <View>
        <Image source={IMAGES_PATH.user} />
      </View>
      <View style={styles.rat_content}>
        <Text style={styles.user_name}>{item.name}</Text>
        <View style={styles.star_container}>
          <View>
            <Image style={styles.star_icon} source={IMAGES_PATH.star} />
          </View>
          <Text>{item.date}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const RatingStar = ({index}: {index: number}) => {
  return (
    <View style={styles.get_rating_container}>
      <View style={styles.stars_container}>
        {/* show star according index */}
        {Array(index + 1)
          .fill(0)
          .map((item, index) => (
            <Image key={index} source={IMAGES_PATH.star} style={styles.star} />
          ))}
      </View>
      <View style={styles.slider}>
        <View style={[styles.line, {width: (index + 1) * 20}]} />
      </View>
    </View>
  );
};

const Rating = () => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.rating_header}>
          <View style={styles.rating_txt_container}>
            <Text style={styles.r_count}>4.5</Text>
            <Text>23 ratings</Text>
          </View>
          <View style={styles.rating_star_container}>
            {Array(5)
              .fill(0)
              .map((item, index) => <RatingStar key={index} index={index} />)
              .reverse()}
          </View>
        </View>

        <View>
          <Text style={styles.review_txt}>8 Reviews</Text>
        </View>
        {ratings.map((item, index) => (
          <ReviewCard key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Rating;
