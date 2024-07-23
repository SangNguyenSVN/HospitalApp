import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../src/App/Screen/HomeScreen'
import HomeNavigation from '../src/App/Navigation/HomeNavigation'

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeNavigation/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})