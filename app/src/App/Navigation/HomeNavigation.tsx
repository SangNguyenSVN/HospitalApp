import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen';
import HostpitalLstScreen from '../Screen/HostpitalLstScreen';
import HospitalDetail from '../components/HospitalDoctorsScreen/HospitalDetail';
import BookingAppointment from '../components/booking/BookingAppointment';
import { useUser } from '@clerk/clerk-expo';
import DoctorDetail from '../components/HospitalDoctorsScreen/DoctorDetail';

const Stack = createStackNavigator();
const HomeNavigation = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='hospital-doctor-list' component={HostpitalLstScreen} />
      <Stack.Screen name='hospital-detail' component={HospitalDetail} />
      <Stack.Screen name='doctor-detail' component={DoctorDetail} />
      <Stack.Screen name='booking-appointment' component={BookingAppointment} />
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})