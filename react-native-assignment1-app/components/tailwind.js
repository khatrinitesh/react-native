import React from 'react'
import { Text, StyleSheet } from 'react-native';

const applyStyles = (classNames) => {
    const styles = classNames.split(' ').map(className => {
      switch (className) {
        case 'text-blue':
          return styles.textBlue;
        case 'font-bold':
          return styles.fontBold;
        default:
          return {};
      }
    });
    return StyleSheet.flatten(styles);
  };
  

const TailwindText = ({ children, className }) => {
    const styles = applyStyles(className);
  
    return (
      <Text style={styles}>
        {children}
      </Text>
    );
  };
export default TailwindText
