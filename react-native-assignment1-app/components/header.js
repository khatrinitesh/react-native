import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HeaderComponent = () => {
  return (
    <>
    <View style={styles.header}>
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/serviceslist">Service list</Link>
       <Link href="/contact">Contact</Link>
    </View>
    </>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#ddd',
    },
    link: {
      paddingHorizontal: 10,
    },
    navlink:{
        color:'red'
    }
});