import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const getWidth = () => width;
const getHeight = () => height;
const scale = width / 375;

function moderateScale(size, factor = 0.7) {
  const newSize = size * scale;
  const newPixelRatioSize = Platform.OS === 'ios' ? newSize : newSize - 2;
  return size + (newPixelRatioSize - size) * factor;
}

export {getWidth, getHeight, moderateScale};
