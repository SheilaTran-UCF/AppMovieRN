import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {moderateScale} from '../../../helper';
import Images from '../../../assets';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieApp</Text>
      <Image style={styles.searchIcon} source={Images.search} />
      <Image style={styles.filterIcon} source={Images.filter} />
    </View>
  );
};

export default HeaderHome;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(50),
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(30),
  },
  searchIcon: {
    height: moderateScale(30),
    width: moderateScale(30),

    marginLeft: 155,
  },
  filterIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
    // left: moderateScale(15),
    marginLeft: 15,
    fontSize: moderateScale(20),
  },
});
