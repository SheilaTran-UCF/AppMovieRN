import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../assets';

const LazyLoadImage = () => {
  return (
    <View>
      <Image style={styles.movie} source={Images.movie} resizeMode="cover" />
    </View>
  );
};

export default LazyLoadImage;
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movie: {
    width: width,
    height: width,
  },
});
