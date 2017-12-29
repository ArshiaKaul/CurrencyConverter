import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      imageStyle={{ resizeMode: 'stretch' }}
      style={styles.containerImage}
      source={require('./images/background.png')}
    >
      <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
      <Text style={styles.text}>Currency Converter</Text>
    </ImageBackground>
  </View>
);

export default Logo;
