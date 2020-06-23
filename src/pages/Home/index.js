import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Logo from '../../../assets/logo.jpeg';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58
  }
});

export default function Home() {
  return ( 
    <View>
      <Image source={Logo} style={styles.logo} ></Image>
    </View>

  );
}