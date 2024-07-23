import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const BookingAppointmentInfo = ({ hospitalInfo }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxInfo}>
                <View>
                    <Image
                        style={styles.imgInfo}
                        source={{ uri: hospitalInfo.attributes.Image.data.attributes.url }} />
                </View>
                <View style={styles.viewInfo}>
                    <Text style={styles.txt_NameHospital}>{hospitalInfo.attributes.Name}</Text>
                    <View style={styles.viewItem}>
                        <View style={styles.viewItem_Information}>
                            <Ionicons name="location" size={20} color="blue" />
                            <Text style={styles.content}>{hospitalInfo.attributes.Address}</Text>
                        </View>
                        <View style={styles.viewItem_Information}>
                            <AntDesign name="clockcircle" size={18} color="blue" />
                            <Text style={styles.content}> Mon-Sun</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BookingAppointmentInfo

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    boxInfo:{
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10
    },
    imgInfo: {
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    viewInfo:{
        flexDirection:'column',
        justifyContent:'flex-start',
        width: '70%',
       
    },
    txt_NameHospital:{
        
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    viewItem:{
        
    },
    viewItem_Information:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2
    },
    content:{
        fontSize: 15,
        marginTop: 5,
        color:'gray'
    }
})