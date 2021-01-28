import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from './ListItem';
import DetailView from './DetailView';

const Stack = createStackNavigator();
export default function Main(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListItem" screenOptions={{headerShown:false}}>
                <Stack.Screen name="ListItem" component={ListItem}/>
                <Stack.Screen name="DetailView" component={DetailView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}