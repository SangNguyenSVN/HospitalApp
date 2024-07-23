import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppointmentScreen from '../Screen/AppointmentScreen';
const AppointmentNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Appoitment" component={AppointmentScreen} />
    </Stack.Navigator>
  )
}

export default AppointmentNavigation

const styles = StyleSheet.create({})