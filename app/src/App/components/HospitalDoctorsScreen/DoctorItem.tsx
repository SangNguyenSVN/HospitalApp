import { StyleSheet, Text, View, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { formatTime } from '../../services/DayTime';
const DoctorItem = ({ doctorItem }: any) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: doctorItem.attributes.Avatar.data.attributes.url }} style={styles.avatar} />
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    data={doctorItem.attributes.categories.data}
                    renderItem={({ item }: any) =>
                        <View style={styles.viewCate}>
                            <Text style={styles.categoryName}>{item.attributes.Name}</Text>
                        </View>
                    } />
            </View>
            <View style={styles.viewContent}>
                    <Text style={styles.header}>{doctorItem.attributes.Name}</Text>
                    <View style={styles.viewInformation}>
                        <Text>{doctorItem.attributes.hospital.data.attributes.Name}</Text>
                        <View style={styles.viewItem_Information}>
                            <AntDesign name="clockcircle" size={20} color="blue" />
                            <Text style={styles.content}>{formatTime(doctorItem.attributes.Start_Time)} - </Text>
                            <Text style={styles.content}>{formatTime(doctorItem.attributes.End_Time)}</Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default DoctorItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    shadowBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'gray',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    avatar: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: 'black',
    },
    viewCate: {
        // custom category view in there
    },
    categoryName: {
        fontSize: 16,
        color: 'gray',
        margin: 3,

    },
    viewContent: {
        padding: 5,
        alignContent: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewInformation: {
        flexDirection: 'column',
    },
    viewItem_Information: {
        marginTop: 7,
        flexDirection: 'row',
    },
    content: {
        fontSize: 18,
    },
})