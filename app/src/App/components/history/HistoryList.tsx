import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global_API from '../../Server/Global_API';
import { useUser } from '@clerk/clerk-expo';
import { formatTime } from '../../services/DayTime';
import { useNavigation } from 'expo-router';
import moment from 'moment';

const HistoryList = () => {
    const { user } = useUser();
    const [historyLst, setHistoryLst] = useState<any>();

    const getEmail: any = user?.primaryEmailAddress?.emailAddress
    const emailTest: string = 'sangvu110@gmail.com'
    const navigation = useNavigation()
    const getAppointment = async () => {
        try {
            const response = await Global_API.getAppointment(emailTest);
            // console.log(response.data.data);
            setHistoryLst(response.data.data);
        } catch (error) {
            console.trace(error);
        }
    }

    useEffect(() => {
        getAppointment();
    }, [])

    const _renderItem = ({ item }: any) => (
        <View style={styles.container_list}>
            <TouchableOpacity onPress={() => {
                
                navigation.navigate('appointment-information', {
                    historyLst: item
                })
            }}>
                <View style={styles.item_List}>
                        <Text >ID: #{item.id}</Text>
                    </View>
                <View style={styles.information}>
                    <View style={styles.item_List}>
                        <Text>Fullname: {item.attributes.Fullname}</Text>
                    </View>
                    <View style={styles.item_List}>
                        <Text>Phone: {item.attributes.Phone}</Text>
                    </View>
                </View>
                <View style={styles.datetime}>
                    <View style={styles.item_List}>
                        <Text>Time: {formatTime(item.attributes.Time)}</Text>
                    </View>
                    <View style={styles.item_List}>
                        <Text>Date: {moment(item.attributes.Date).format('MMMM Do YYYY')}</Text>
                    </View>
                </View>
                <View style={styles.item_List}>
                    <Text>Address: {item.attributes.hospitals.data[0].attributes.Address}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={historyLst}
                renderItem={_renderItem} />
        </View>
    )
}

export default HistoryList

const styles = StyleSheet.create({
    container: {

    },
    container_list: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    item_List: {
        padding: 5,
        marginHorizontal: 10
    },
    datetime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})