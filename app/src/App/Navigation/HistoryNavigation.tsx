import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HistoryScreen from '../Screen/HistoryScreen';
import HistoryList from '../components/history/HistoryList';
import AppointmentInfo from '../components/history/AppointmentInfo';
const HistoryNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='History' component={HistoryScreen} />
            <Stack.Screen name='history-list' component={HistoryList} />
            <Stack.Screen name='appointment-information' component={AppointmentInfo} />
        </Stack.Navigator>
    )
}

export default HistoryNavigation

const styles = StyleSheet.create({})