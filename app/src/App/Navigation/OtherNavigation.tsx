import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from '../components/login/LoginForm';

const OtherNavigation = () => {
  const Stack = createStackNavigator();
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginForm} />
    </Stack.Navigator>


  )
}

export default OtherNavigation

const styles = StyleSheet.create({})