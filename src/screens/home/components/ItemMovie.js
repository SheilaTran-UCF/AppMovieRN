import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import React, {useState} from 'react';

import Images from '../../../assets';

import {moderateScale, getWidth} from '../../../helper';
import {URL_IMAGE} from '../../../helper/constant';
import {RoutesName} from '../../../navigation';
import {NavigationController} from '../../../navigation/NavigationController';

const ItemMovie = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationController.navigate(RoutesName.Detail);
      }}
      style={{
        margin: 1,
        borderWidth: 2,
        borderColor: '#d35647',
        resizeMode: 'cover',
      }}>
      <Image
        source={{
          uri: `${URL_IMAGE}${item.poster_path}`,
        }}
        style={{
          width: getWidth() / 2 - moderateScale(7),
          height: moderateScale(250),
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.2)',
          width: getWidth() / 2,
          height: moderateScale(50),
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMovie;
const styles = StyleSheet.create({
  film: {
    height: moderateScale(300),
    width: getWidth() / 2,
  },
});
