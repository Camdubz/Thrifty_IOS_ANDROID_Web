import {View, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/product';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <ProductItem item={products[0]} />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
