import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { formatTime } from '../../services/DayTime'


const HospitalInfo = ({ hospitalInfo }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewHospital}>
                <Text style={styles.hospitalName}>{hospitalInfo.attributes.Name}</Text>
                <FlatList
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={hospitalInfo.attributes.categories.data}
                    renderItem={({ item }: any) =>
                        <View style={styles.viewCate}>
                            <Text style={styles.categoryName}>{item.attributes.Name}</Text>
                        </View>
                    } />
                <View style={styles.viewInfo}>
                    <View style={styles.viewItem_Information}>
                        <Ionicons name="location" size={18} color="blue" />
                        <Text style={styles.content}>{hospitalInfo.attributes.Address}</Text>
                    </View>
                    <View style={styles.viewItem_Information}>
                        <AntDesign name="clockcircle" size={18} color="blue" />
                        <Text style={styles.content}> MON - SUN | {formatTime(hospitalInfo.attributes.Open)} - </Text>
                        <Text style={styles.content}>{formatTime(hospitalInfo.attributes.Close)}</Text>
                    </View>
                    <View style={styles.viewItem_Information_Description}>
                        <Text style={styles.Header_Description}>About</Text>
                        <Text style={styles.Content_Description}>{hospitalInfo.attributes.Description}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HospitalInfo

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: -40,
        backgroundColor: 'white'
    },
    viewHospital: {
        
        padding: 10,
        alignItems: 'center'
    },
    hospitalName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    viewInfo: {
        alignSelf: 'flex-start',
        width: '100%'

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
    viewItem_Information_Description: {
        borderTopWidth: 0.5,
        borderTopColor: 'gray',

    },
    Header_Description: {
        fontSize: 25,
        marginTop: 6,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    Content_Description: {
        fontSize: 16,
        letterSpacing: 0.5,
        marginHorizontal: 5
    }
})