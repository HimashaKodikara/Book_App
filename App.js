import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import LeeChild from './screens/LeeChild';


import RegisterScreen from './screens/Register';

const Stack =createNativeStackNavigator()


export default function App(){
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='LeeChild Book' component={LeeChild}/>
      
         <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}