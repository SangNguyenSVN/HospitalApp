import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeaders from '../components/Shared/PageHeaders'
import HospitalDoctorTab from '../components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalList from '../components/HospitalDoctorsScreen/HospitalList'
import Global_API from '../Server/Global_API'
import DoctorList from '../components/HospitalDoctorsScreen/DoctorList'



const HostpitalLstScreen = () => {
  const param = useRoute<any>().params
  const [hospitalLst, setHospitalLst] = useState<any[]>();
  const [doctorLst, setDoctorLst] = useState<any[]>();
  const [activeTab, setActiveTab] = useState('');


  useEffect(() => {
    getListByCategory();
  }, [])

  const getListByCategory = () => {
    Global_API.getHospitalByCategory(param.categoryName).then(response => {
      console.log(response.data.data);
      setHospitalLst(response.data.data);
    });
    Global_API.getDoctorByCategory(param.categoryName).then(response => {
      console.log(response.data.data);
      setDoctorLst(response.data.data);
    });
  }

  return (
    <View style={styles.container}>

      <PageHeaders title={param.categoryName} back_icon={true} />
      <HospitalDoctorTab activeTab={(value: any) => setActiveTab(value)} />
      {
        activeTab === 'doctor'
          ? !doctorLst?.length
            ? <ActivityIndicator size="large" color="#0000ff" />
            : <DoctorList doctorLst={doctorLst} />
          : !hospitalLst?.length
            ? <ActivityIndicator size="large" color="#0000ff" />
            : <HospitalList hospitalLst={hospitalLst} />
      }
      {/* {
        !hospitalLst?.length || !doctorLst?.length 
          ? <ActivityIndicator size="large" color="#0000ff" />
          :
          activeTab === 'doctor'
            ? <DoctorList doctorLst={doctorLst} />
            : <HospitalList hospitalLst={hospitalLst} />
      } */}
    </View>
  )
}

export default HostpitalLstScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute'
  },
  txtLoading: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    paddingTop: 40,
    color: 'gray'
  },
  contentContainer: {}
})