import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import Slider from '../components/home/Slider'
import Category from '../components/home/Category'
import PremiumHospital from '../components/home/PremiumHospital'
import { ScrollView } from 'react-native'
import SearchingSlide from '../components/home/SearchingSlide'


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.item}>
        <SearchingSlide />
        <ScrollView style={styles.container}>
          <Slider />
          <Category />
          <PremiumHospital />
        </ScrollView>
      </View>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    flex: 1,
    paddingHorizontal: 10,
  }
})