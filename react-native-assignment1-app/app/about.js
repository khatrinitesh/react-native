import React, { useState } from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TailwindText from '../components/tailwind';


const AboutScreen = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigation = useNavigation();

    const btnHandle = () => {
        navigation.navigate('Home')
    }

    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    const handlePress = (index) => {
        setActiveIndex(index);
      };
  return (
    <>
         <View style={[
            styles.container,
            {
                flexDirection: 'column',
            },
            ]}>
        <Button onPress={btnHandle} title="Go to Home"/>
        <View style={{color:'#fff'}}>
            {data.map((item, index) => (
            <TouchableOpacity
                key={item.id}
                style={[
                    styles.item,
                    index === activeIndex && styles.activeItem,
                    index === data.length - 1 && styles.lastItem
                ]}
                onPress={() => handlePress(index)}
                >
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        ))}
        </View>
      
      </View>
    </>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    firstItem: {
        marginTop: 10, // Example style for first item
    },
    activeItem: {
        backgroundColor: 'red', // Example style for active item
      },
    lastItem: {
        marginBottom: 10, // Example style for last item
    },

  });
