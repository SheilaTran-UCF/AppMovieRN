import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';
import {URL_IMAGE} from '../../helper/constant';
import {moderateScale, getWidth, getHeight} from '../../helper';
import HeaderDetail from './components/HeaderDetail';
import LazyLoadImage from '../../common/LazyLoadImage';
import {useRoute} from '@react-navigation/native';
import {getDetailMovie} from '../../services';

const Detail = () => {
  const [detailMove, setDetailMovie] = useState([]);

  // useRoute : Hook -> api library
  const route = useRoute();
  // movieDetail get from ItemMovie file
  // nhan data tu ItemMovie file -> chay useEffect de goi ham getDataMovieDetail
  const {movieDetail} = route.params;
  // console.log({movieDetail});

  const getDataMovieDetail = async () => {
    const resFromAPI = await getDetailMovie(movieDetail.id);
    const resMovieJson = await resFromAPI.json();
    // console.log({resMovieJson});
    setDetailMovie(resMovieJson);
  };

  React.useEffect(() => {
    getDataMovieDetail();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderDetail />
      <ScrollView>
        <View>
          {/* <Text style={styles.text}>{movieDetail.original_title}</Text> */}
          <Text style={styles.text}>{detailMove.original_title}</Text>

          <Text style={styles.text1}>
            Release Date: {movieDetail.release_date}
          </Text>
          <Text style={styles.text1}> Rating {movieDetail.vote_average} </Text>
          <Text style={styles.text1}> Genres: {movieDetail.genre_ids} </Text>

          <View>
            <Text style={styles.text3}>Summary</Text>
          </View>
          <Text style={styles.text1}>{movieDetail.overview}</Text>

          <Text style={styles.text4}>Traillers</Text>
          <View>
            <Image
              style={styles.searchPic}
              source={{
                uri: `${URL_IMAGE}${movieDetail.poster_path}`,
              }}
            />
          </View>

          <Text style={styles.text4}>Review</Text>
          <Text style={styles.text1}>
            {/* A once-abused woman devotes herself to ridding victim of their
            domestic abuses while hunting down the husband she must kill to
            trully be free jf;dlj;lk;lk;ll;klklkllkklkllk;ll;k;lk */}
            {movieDetail.overview}
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
