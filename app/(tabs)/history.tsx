import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppointmentScreen from '../src/App/Screen/AppointmentScreen'
import PageHeaders from '../src/App/components/Shared/PageHeaders'
import HistoryScreen from '../src/App/Screen/HistoryScreen'
import HomeNavigation from '../src/App/Navigation/HomeNavigation'
import HistoryNavigation from '../src/App/Navigation/HistoryNavigation'
const History = () => {
  return (
    <View style={styles.container}>
      <HistoryNavigation/>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})