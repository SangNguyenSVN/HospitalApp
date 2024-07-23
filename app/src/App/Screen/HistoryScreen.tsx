import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistoryList from '../components/history/HistoryList'
import PageHeaders from '../components/Shared/PageHeaders'

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <PageHeaders title={'History'} back_icon={false}/>
      <HistoryList/>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})