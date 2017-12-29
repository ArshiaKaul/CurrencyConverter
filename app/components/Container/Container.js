import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
    <Text>Hello!</Text>
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
