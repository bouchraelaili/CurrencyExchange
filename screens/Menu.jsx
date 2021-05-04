import React from 'react'
import {View, ImageBackground, StyleSheet,Text } from 'react-native'




const Home = () => (
    <View style={styles.container} >
      <ImageBackground
        resizeMode="contain"
        style={styles.img}
        source={require('../assets/undraw_transfer_money_rywa.png')}
      >
      </ImageBackground>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );

const styles = StyleSheet.create({
img: {
    width: 400,
    height: '100%'
},
container:{
    backgroundColor:'white'
},
text:{
    color: 'red',
    fontSize: 28,
    letterSpacing: -0.5,
    // marginTop: 15,
    fontWeight: '600'
  }
});

export default Home;

