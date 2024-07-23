import { StyleSheet, Text, View, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { formatTime } from '../../services/DayTime';
const HospitalsItem = ({ hospitalItem }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.shadowBox}>
                <Image source={{ uri: hospitalItem.attributes.Image.data.attributes.url }}
                    style={styles.imgHospital} />
                <FlatList 
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    data={hospitalItem.attributes.categories.data}
                    renderItem={({ item }: any) =>
                        <View style={styles.viewCate}>
                            <Text style={styles.categoryName}>{item.attributes.Name}</Text>
                        </View>
                    } />
                <View style={styles.viewContent}>
                    <Text style={styles.header}>{hospitalItem.attributes.Name}</Text>
                    <View style={styles.viewInformation}>
                        <View style={styles.viewItem_Information}>
                            <Ionicons name="location" size={20} color="blue" />
                            <Text style={styles.content}>{hospitalItem.attributes.Address}</Text>
                        </View>
                        <View style={styles.viewItem_Information}>
                            <AntDesign name="clockcircle" size={20} color="blue" />
                            <Text style={styles.content}> MON to SUN | {formatTime(hospitalItem.attributes.Open)} - </Text>
                            <Text style={styles.content}>{formatTime(hospitalItem.attributes.Close)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HospitalsItem

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
    imgHospital: {
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