import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from 'expo-router'
import DoctorInfo from './DoctorInfo'
import DoctorItem from './DoctorItem'
const DoctorList = ({doctorLst}:any) => {
  const navigation = useNavigation<any>()
  return (
    <FlatList
            style={styles.viewList}
            data={doctorLst}
            renderItem={({ item, index }) => (
                // <TouchableOpacity onPress={() => navigation.navigate('doctor-detail',{
                //     doctorItem: item
                // })}>
                //     <DoctorItem doctorItem={item}/>
                // </TouchableOpacity>
                <View>
                  <DoctorItem doctorItem={item}/>
                </View>
            )}
        />
  )
}

export default DoctorList
 
const styles = StyleSheet.create({
  viewList: {
    
  } 
})