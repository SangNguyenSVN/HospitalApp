import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ExploreScreen from '../Screen/ExploreScreen';

const ExploreNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
    )
}

export default ExploreNavigation

const styles = StyleSheet.create({})
