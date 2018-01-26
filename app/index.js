import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Themes from './screens/Themes';

EStyleSheet.build({
  $primaryPink: '#FF6D7A',
  $primaryBlue: '#4F607A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#929292',
  $inputText: '#797979',
  $lightGray: '#F3F3F3',
  $darkText: '#343434',
});

export default () => <Themes />;
