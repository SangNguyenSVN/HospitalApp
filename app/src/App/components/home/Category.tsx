import { FlatList, StyleSheet, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global_API from '../../Server/Global_API';
import { useNavigation } from '@react-navigation/native';
import SubHeading from '../Shared/SubHeading';

const Category = () => {
    const [cateLst, setCateLst] = useState();
    const navigation = useNavigation<any>();
    const [showAll, setShowAll] = useState(false);

    // thêm điều kiện ẩn/ hiện cho item category
    const showItem = () => {
        setShowAll(!showAll);
    }
    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try {
            const response = await Global_API.getCategories();
            // console.log(response.data.data);
            setCateLst(response.data.data);
        } catch (error) {   
            console.trace(error);
            console.log("Error at Hospital-Booking-App/app/src/App/components/home/Category.tsx");
        }
    };
    const getHospitalsList = (categoryName: string) => {
        try {
            console.log('press', categoryName)
            navigation.navigate('hospital-doctor-list', {
                categoryName
            })
        }
        catch {
            console.log('Error getHospitalsList() where src/App/components/home/Category.tsx')
        }
    }
    // trả về màn hình item category với index < 4 đã thêm điều kiện showAll
    const renderItem = ({ item, index }: any) => (showAll || index < 4) && (
        <TouchableOpacity onPress={() => getHospitalsList(item.attributes.Name)}>
            <View style={styles.imgview}>
                <Image
                    style={styles.img}
                    source={{ uri: item.attributes.Image.data.attributes.url }} />
            </View>
            <Text style={styles.cateName}>
                {item.attributes.Name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SubHeading title={'Category'} />
                <TouchableOpacity onPress={showItem} >
                    {
                        !showAll
                            ? <Text style={styles.txt_onpress}>See All</Text>
                            : <Text style={styles.txt_onpress}>Hide</Text>
                    }
                </TouchableOpacity>
            </View>
            <FlatList
                data={cateLst}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                numColumns={4}
                columnWrapperStyle={{ flex: 1, justifyContent: 'space-between', }}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txt_onpress: {
        color: 'blue',
        fontSize: 18,
    },
    imgview: {
        width: 75,
        height: 75,
        backgroundColor: '#00B2BF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    img: {
        height: 38,
        width: 38,

    },
    viewtxt: {

    },
    txt1: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    txt2: {
        color: 'blue',
        fontSize: 18
    },
    cateName: {
        alignSelf: 'center',
        marginVertical: 5,
        fontSize: 12,
        fontWeight: 'bold',
        margin: 2
    }
})