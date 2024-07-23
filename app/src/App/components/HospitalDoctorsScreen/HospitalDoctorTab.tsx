import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HospitalDoctorTab = ({ activeTab }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { setActiveIndex(0); activeTab('hospital') }}
                style={[activeIndex == 0 ? styles.activeTab : styles.inActiveTab]}
            >
                <Text style={[activeIndex == 0 ? styles.activeText : styles.inActiveTExt]}>
                    Hospital
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { setActiveIndex(1); activeTab('doctor') }}
                style={[activeIndex == 1 ? styles.activeTab : styles.inActiveTab]}
            >
                <Text style={[activeIndex == 1 ? styles.activeText : styles.inActiveTExt]}>
                    Doctor
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HospitalDoctorTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    viewlst: {


    },
    activeText: {
        fontSize: 20,
        color: 'blue',
        // fontWeight: 'bold',
    },
    inActiveTExt: {
        fontSize: 18,
        color: 'gray'
    },
    activeTab: {
        borderBottomWidth: 2,
        borderColor: 'blue',
        padding: 3
    },
    inActiveTab: {
        borderBottomWidth: 2,
        borderColor: 'gray',
    },



})