import {View, FlatList, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {RoutesName} from '../../navigation';
import {NavigationController} from '../../navigation/NavigationController';
import Images from '../../assets';
import HeaderHome from './components/HeaderHome';

import {moderateScale, getWidth, getHeight} from '../../helper';
import ItemMovie from './components/ItemMovie';
import {getListMovies} from '../../services';

const Home = () => {
  const [listMovies, setListMovies] = useState([]); //hook cua react, khai bao state
  //  listMovie : bien , setListMovie : ham
  const [loading, setLoading] = useState(true);

  const getDataMovie = async () => {
    // getListMovies()
    //   // chuyen doi du lieu get ve tu server tu dang json sang dang doc duoc
    //   .then(res => res.json())
    //   // chuyen doi xong moi dung duoc
    //   .then(res => {
    //     console.log('s', res);
    //     setLoading(false);
    //   });
    const resFromAPI = await getListMovies();
    // console.log({resFromAPI});
    const resJson = await resFromAPI.json();
    // console.log({resJson});
    setListMovies(resJson.results);
    setLoading(false);
  };

  React.useEffect(() => {
    getDataMovie();
  }, []);

  if (loading === true) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <HeaderHome />
        <FlatList
          numColumns={2}
          style={{
            flexGrow: 0,
          }}
          data={listMovies}
          showsVerticalScrollIndicator={false}
          // call ItemMovie from ItemMovie file
          renderItem={({item}) => <ItemMovie item={item} />}
        />
      </View>
    );
  }
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
