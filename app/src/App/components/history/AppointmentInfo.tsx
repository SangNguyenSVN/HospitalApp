import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { formatTime } from '../../services/DayTime'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeaders from '../Shared/PageHeaders'


const AppointmentInfo = () => {
    const [historyLst, setHistoryLst] = useState<any>();
    const param = useRoute<any>().params

    useEffect(() => {
        setHistoryLst(param.historyLst)
    }, [])


    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <PageHeaders title={`${param.historyLst.attributes.Fullname}`} back_icon={true} />
            <View>
                <View style={styles.item_List}>
                    <Text >ID: #{param.historyLst.id}</Text>
                </View>
                <TouchableOpacity onPress={()=>{ console.log(navigation.getState())}}>
                    <View style={styles.information}>
                        <View style={styles.item_List}>
                            <Text>Fullname: {param?.historyLst.attributes.Fullname}</Text>
                        </View>
                        <View style={styles.item_List}>
                            <Text>Phone: {param?.historyLst.attributes.Phone}</Text>
                        </View>
                        <View style={styles.item_List}>
                            <Text>Email: {param?.historyLst.attributes.Email}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.datetime}>
                    <View style={styles.item_List}>
                        <Text>Time: {formatTime(param?.historyLst.attributes.Time)}</Text>
                    </View>
                    <View style={styles.item_List}>
                        <Text>Date: {moment(param?.historyLst.attributes.Date).format('MMMM Do YYYY')}</Text>
                    </View>
                </View>
                <View style={styles.hospital}>
                    <View style={styles.item_List}>
                        <Text>Hospital: {param?.historyLst.attributes.hospitals.data[0].attributes.Name}</Text>
                    </View>
                    <View style={styles.item_List}>
                        <Text>Address: {param?.historyLst.attributes.hospitals.data[0].attributes.Address}</Text>
                    </View>
                </View>
                {
                    !param?.historyLst.attributes.Note
                        ?
                        null
                        // <View style={styles.item_List}>   
                        // </View>
                        :
                        <View style={styles.note_box}>
                            <View style={styles.item_List}>
                                <Text>{param?.historyLst.attributes.Note}</Text>
                            </View>
                        </View>
                }


            </View>
        </View>
    )
}

export default AppointmentInfo

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    container_list: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    item_List: {
        margin: 10
    },
    datetime: {
        flexDirection: 'row',

    },
    information: {

    },
    hospital: {

    },
    note_box: {
        width: '95%',
        height: '20%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center'
    }
})