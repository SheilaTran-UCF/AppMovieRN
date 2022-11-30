import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';
import {URL_IMAGE} from '../../helper/constant';
import {moderateScale, getWidth, getHeight} from '../../helper';
import HeaderDetail from './components/HeaderDetail';
import LazyLoadImage from '../../common/LazyLoadImage';

const Detail = () => {
  const [detailMove, setDetailMovie] = useState([]);
  return (
    <View style={styles.container}>
      <HeaderDetail />
      <ScrollView>
        <View>
          <Text style={styles.text}> A Vigilante </Text>
          <Text style={styles.text1}> Release Date: 2019-03 -29 </Text>
          <Text style={styles.text1}> Rating 4.9/10 </Text>
          <Text style={styles.text1}> Genres: Thriller,Drama </Text>

          <View>
            <Text style={styles.text3}>Summary</Text>
          </View>
          <Text style={styles.text1}>
            A once-abused woman devotes herself to ridding victim of their
            domestic abuses while hunting down the husband she must kill to
            trully be free jf;dlj;lk;lk;ll;klklkllkklkllk;ll;k;lk
          </Text>

          <Text style={styles.text4}>Traillers</Text>
          <View>
            <Image style={styles.searchPic} source={Images.film} />
          </View>

          <Text style={styles.text4}>Review</Text>
          <Text style={styles.text1}>
            A once-abused woman devotes herself to ridding victim of their
            domestic abuses while hunting down the husband she must kill to
            trully be free jf;dlj;lk;lk;ll;klklkllkklkllk;ll;k;lk
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(30),
    marginLeft: moderateScale(14),
    marginTop: moderateScale(10),
    color: 'white',
  },
  text1: {
    fontSize: moderateScale(12),
    marginLeft: moderateScale(14),
    color: 'white',
  },
  text3: {
    fontSize: moderateScale(15),
    marginLeft: moderateScale(14),
    fontWeight: 'bold',
    marginVertical: moderateScale(15),
    color: 'white',
  },
  text4: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginLeft: moderateScale(14),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(17),
    color: 'white',
  },
  searchPic: {
    height: moderateScale(100),
    width: moderateScale(150),
    marginLeft: moderateScale(14),
  },
  movie: {
    width: moderateScale(400),
    height: moderateScale(250),
  },
});
