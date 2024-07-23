import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useRoute } from '@react-navigation/native';


const BookingButton = ({ hospitalInfo }: any) => {
    const param = useRoute<any>().params;
    const navigation = useNavigation<any>()

    return (
        <View style={styles.BookingButton}>
            <Pressable onPress={() => {
                navigation.navigate('booking-appointment', {
                    hospitalInfo: hospitalInfo,
                })
                console.log("booking", hospitalInfo)
            }
            } style={styles.PressBook}>
                <Text style={styles.txtBook}>Book Now</Text>
            </Pressable>
        </View>
    )
}

export default BookingButton

const styles = StyleSheet.create({
    BookingButton: {
        padding: 1
    },
    PressBook: {
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBook: {
        color: 'white',
        fontSize: 17,
        padding: 15,
        letterSpacing: 1.4,
    }
})