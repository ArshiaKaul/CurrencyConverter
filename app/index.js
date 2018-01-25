import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Options from './screens/Options';

EStyleSheet.build({
  $primaryBlue: '#FF6D7A',
  $white: '#FFFFFF',
  $border: '#929292',
  $inputText: '#797979',
  $lightGray: '#F3F3F3',
  $darkText: '#343434',
});

export default () => <Options />;
