import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#FF6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F3F3F3',
});

export default () => <CurrencyList />;
