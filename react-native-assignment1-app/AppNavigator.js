import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "./pages/home";
import AboutScreen from "./pages/about";
import ContactScreen from "./pages/contact";
import ServiceScreen from './pages/services';
import HeaderComponent from './components/header';

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
         options={{
            header: ({ navigation }) => (
              <HeaderComponent navigation={navigation} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
