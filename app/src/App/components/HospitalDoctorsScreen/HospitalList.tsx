import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HospitalsItem from './HospitalsItem'
import { useNavigation } from 'expo-router'
 

const HospitalList = ({ hospitalLst }: any) => {
    const navigation = useNavigation<any>()
    return (
        <FlatList
            style={styles.viewList}
            data={hospitalLst}
            renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => navigation.navigate('hospital-detail',{
                    hospitalItem: item
                })}>
                    <HospitalsItem hospitalItem={item} />
                </TouchableOpacity>
            )}
        />

    )
}

export default HospitalList

const styles = StyleSheet.create({
    viewList: {

    }
})