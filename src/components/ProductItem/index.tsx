import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = () => {
  return (
    <View>
    <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>Woman's T-Shirt Brown Medium - Zara</Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color={'#e47911'}
            />
            <Text>Quality Rating</Text>
          </View>
          <Text style={styles.price} numberOfLines={3}>
            from $4.57
          </Text>
          <Text style={styles.oldPrice}> was $6.25</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
