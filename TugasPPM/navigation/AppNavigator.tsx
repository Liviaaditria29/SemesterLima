import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailResep from '../screens/TabScreen/DetailResep'; // Import the component
import StartScreen from '../screens/StartScreen';
import Home from '../screens/TabScreen/Home';
import EditResep from '../screens/TabScreen/EditResep';
import TambahResep from '../screens/TabScreen/TambahResep';
import ExploreResep from '../screens/TabScreen/ExploreResep';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailResep"
          component={DetailResep as React.ComponentType} // Casting to ComponentType
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditResep"
          component={EditResep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TambahResep"
          component={TambahResep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExploreResep"
          component={ExploreResep}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
