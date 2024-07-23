import { Animated, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from 'expo-router';
import Global_API from '../../Server/Global_API';
import { FontAwesome } from '@expo/vector-icons';

const SearchingSlide = () => {
    const slideAnim = useRef(new Animated.Value(-300)).current; // Khởi tạo giá trị cho animation
    const [query, setQuery] = useState('');
    const [hospitalLst, setHospLst] = useState<any>();
    const [filteredData, setFilteredData] = useState([]);
    const [showSlide, setShowSlide] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        getHospitals();
    }, []);

    useEffect(() => {
        if (query) {
            const filtered = hospitalLst.filter((item: { attributes: { Name: string; }; }) =>
                item.attributes.Name && item.attributes.Name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
            setShowSlide(true);

            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setFilteredData([]);
            setShowSlide(false);

            Animated.timing(slideAnim, {
                toValue: -300,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [query, hospitalLst]);

    const getHospitals = async () => {
        try {
            const response = await Global_API.getHospitals();
            console.log(response.data.data);
            setHospLst(response.data.data);
        } catch (error) {
            console.trace(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxtxt}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput placeholder='Search'
                    placeholderTextColor={'gray'}
                    contextMenuHidden={true}
                    clearTextOnFocus={true}
                    dataDetectorTypes={'all'}
                    numberOfLines={1}
                    editable
                    value={query}
                    onChangeText={setQuery}
                    style={{ fontSize: 20, marginLeft: 5, width: '90%' }} />
            </View>
            {showSlide && (
                <Animated.View style={[styles.slideView, { transform: [{ translateY: slideAnim }] }]}>
                    <FlatList
                        style={styles.slideList}
                        data={hospitalLst}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.itemText}>{item.attributes.Name}</Text>
                            </View>
                        )}
                    />
                </Animated.View>
            )}

        </View>
    )
}

export default SearchingSlide

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        maxHeight: 'auto',
    },
    boxtxt: {
        maxWidth: '100%',
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10
    },
    slideView: {

    },
    item: {

    },
    itemText: {
        fontSize: 18,
    },
    slideList: {
        maxWidth: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'black',
    }
})