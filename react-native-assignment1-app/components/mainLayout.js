import React from 'react';
import { View,StyleSheet } from 'react-native';

import HeaderComponent from './header';
import FooterComponent from './footer';

const MainLayout = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent />
            <View style={styles.content}>{children}</View>
        <FooterComponent />
      </View>
    );
}

export default MainLayout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      padding: 20,
    },
});
