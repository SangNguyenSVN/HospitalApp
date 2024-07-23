import { FlatList, StyleSheet, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global_API from '../../Server/Global_API';
import { BlurView } from 'expo-blur'
import SubHeading from '../Shared/SubHeading';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const [hospitalLst, setHospLst] = useState<any>();
    const navigation = useNavigation()

    useEffect(() => {
        getHospitals();
    }, [])

    const getHospitals = async () => {
        try {
            const response = await Global_API.getHospitals();
            // console.log(response.data.data);
            setHospLst(response.data.data);
            
        } catch (error) {
            console.trace(error)
            console.log(" error at Hospital-Booking-App\app\src\App\components\home\PremiumHospital.tsx");
        }
    }

    return (
        <View style={styles.container}>
            <SubHeading title={'Hospital'} />
            <FlatList
                data={hospitalLst}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('hospital-detail',{
                        hospitalItem: item
                    })}>
                        <BlurView intensity={5} style={styles.viewBox}>

                            <Image
                                style={styles.img}
                                source={{ uri: item.attributes.Image.data.attributes.url }} />
                            {
                                !item.attributes.BloodDonation
                                    ?
                                    <View style={styles.view_blood_icon}>
                                        <Fontisto name="blood-drop" size={24} color="blue" />
                                        <Text style={styles.txt_blood_donation}>
                                           Open Blood Donation
                                        </Text>
                                    </View>
                                    : <></>
                            }
                            <View style={styles.viewContent}>
                                <Text style={styles.hospName}>
                                    {item.attributes.Name}
                                </Text>
                                <Text style={styles.hospAddr}>
                                    {item.attributes.Address}
                                </Text>
                            </View>
                        </BlurView>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    viewtxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
    },
    txt1: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    txt2: {
        color: 'blue',
        fontSize: 18
    },
    viewBox: {
        borderRadius: 10,
        overflow: 'hidden',
        width: 280,
        height: 200,
        justifyContent: 'flex-start',
        borderColor: '#888888',
        borderWidth: 1,
        margin: 2,
    },
    img: {
        height: '60%',
        width: '100%',
    },
    view_blood_icon: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems:'center',
        gap: 5
    },
    txt_blood_donation:{
        fontSize: 20,
        color : 'black'
    },
    viewContent: {
        padding: 3,
        paddingTop: 3,

    },
    hospName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    hospAddr: {
        fontSize: 15,
        letterSpacing: 1,
        marginTop: 2
    }
})