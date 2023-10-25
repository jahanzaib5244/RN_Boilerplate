import {Dimensions} from 'react-native';
import {SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT} from '@env';

export const {width, height} = Dimensions.get('window');
const [shortDimension, _] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

export const Font = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;

export const Height = (pxl: number) => {
  return (height / guidelineBaseHeight) * pxl;
};

export const Width = (pxl: number) => {
  return (width / guidelineBaseWidth) * pxl;
};
