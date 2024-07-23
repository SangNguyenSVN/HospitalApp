import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screen/ProfileScreen';

const ProfileNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation

const styles = StyleSheet.create({})