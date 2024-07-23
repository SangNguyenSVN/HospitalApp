import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import HospitalInfo from './HospitalInfo';


const HospitalDetail = () => {
  const [hospitalLst, setHospitalLst] = useState<any>();
  const param = useRoute<any>().params
  const navigation = useNavigation<any>()
  
  useEffect(() => {
    setHospitalLst(param.hospitalItem)
  }, [])

  return (
    <View style={styles.container}> 
      <ScrollView>
        <View style={styles.viewItem}>
          <Image source={{ uri: param.hospitalItem.attributes.Image.data.attributes.url }}
            style={styles.hospitalImg} />
          <HospitalInfo hospitalInfo={param.hospitalItem} />
        </View>
      </ScrollView>
      <Pressable style={styles.PressBook}
        onPress={() =>
          navigation.navigate('booking-appointment', {
            hospitalInfo: param.hospitalItem,
          })}>
        <Text style={styles.txtBook}>Book Now</Text>
      </Pressable>
    </View>
  )
}

export default HospitalDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'space-between'
  },
  hospitalImg: {
    height: 250,
    width: '100%'
  },
  viewItem: {
    

  },
  PressBook: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
  txtBook: {
    color: 'white',
    fontSize: 17,
    padding: 15,
    letterSpacing: 1.4,
  }

})