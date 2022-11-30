import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../../../helper';
import Images from '../../../assets';
import {NavigationController} from '../../../navigation/NavigationController';
import {RoutesName} from '../../../navigation';

const HeaderDetail = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationController.navigate(RoutesName.Home);
        }}>
        <Image style={styles.searchIcon} source={Images.arrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => NavigationController.navigate(RoutesName.Home)}>
        <Text style={styles.title}>Movie Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDetail;
const styles = StyleSheet.create({
  container: {
    // zIndex: 10000,
    marginTop: 20,
    flexDirection: 'row',
    height: moderateScale(50),
    backgroundColor: 'lightgray',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    height: moderateScale(30),
    width: moderateScale(30),
    // left: moderateScale(15),sai , dung only khi absolute
    marginLeft: 15,
  },
  filterIcon: {
    height: 30,
    width: 30,
  },
  title: {
    fontWeight: 'bold',

    marginLeft: 20,
    fontSize: moderateScale(20),
  },
});
