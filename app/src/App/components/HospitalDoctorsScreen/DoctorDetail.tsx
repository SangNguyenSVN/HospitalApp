import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import DoctorInfo from './DoctorInfo';

const DoctorDetail = () => {
  const [doctorLst, setDoctorLst] = useState<any>();
  const param = useRoute<any>().params
  const navigation = useNavigation<any>()

  useEffect(() => {
    setDoctorLst(param.doctorItem)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View >
          <Image source={{ uri: param.doctorItem.attributes.Avatar.data.attributes.url }}
            style={styles.avatar} />
          <DoctorInfo doctorInfo={param.doctorItem} />
        </View>
      </ScrollView>
    </View>
  )
}

export default DoctorDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  avatar: {
    height: 250,
    width: '100%'
  },
})