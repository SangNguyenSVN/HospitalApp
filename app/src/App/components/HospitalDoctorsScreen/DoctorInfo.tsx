import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { formatTime } from '../../services/DayTime'
const DoctorInfo = ({ doctorInfo }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewDoctor}>
                <Text style={styles.doctorName}>{doctorInfo.attributes.Name}</Text>
                <FlatList
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={doctorInfo.attributes.categories.data}
                    renderItem={({ item }: any) =>
                        <View style={styles.viewCate}>
                            <Text style={styles.categoryName}>{item.attributes.Name}</Text>
                        </View>
                    } />
                <View style={styles.viewInfo}>
                    
                    <View style={styles.viewItem_Information}>
                        <AntDesign name="clockcircle" size={18} color="blue" />
                        <Text style={styles.content}>{formatTime(doctorInfo.attributes.Start_Time)} - </Text>
                        <Text style={styles.content}>{formatTime(doctorInfo.attributes.End_Time)}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default DoctorInfo

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: -40,
        backgroundColor: 'white'
    },
    viewDoctor: {
        padding: 10,
        alignItems: 'center'
    },
    doctorName: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    viewInfo: {
        alignSelf: 'flex-start',

    },
    viewCate: {
        // custom category view in there
    },
    categoryName: {
        fontSize: 17,
        color: 'gray',
        margin: 3,

    },
    viewItem_Information: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 3
    },
    content: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 7,
    },
   
})