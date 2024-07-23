import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppointmentForm from '../components/appointment/AppointmentForm'



const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <AppointmentForm/>
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  container:{
    
  }
})