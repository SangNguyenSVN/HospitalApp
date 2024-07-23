import { Pressable, StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
const HeaderBar = ({ title, back_icon }: any) => {

    const navigation = useNavigation();
    const param: any = useRoute().params;
    
    const goBack = () => {
        try {
            navigation.goBack()
        } catch {
            console.log("Error goBack() where src/App/components/Shared/PageHeaders.tsx")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {
                    back_icon
                        ? <TouchableOpacity onPress={() => goBack()}>
                            <AntDesign name="leftcircleo" size={40} color="black" />
                        </TouchableOpacity>
                        : <></>
                }
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </View>
    );
};

export default HeaderBar
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00B2BF',
        maxHeight: '12%',
        maxWidth: '100%',
    },
    header: {
        flexDirection: 'row',
        gap: 15,
        display: 'flex',
        marginLeft: 5,
        marginTop: 25,
        paddingVertical: 15,
        justifyContent: 'flex-start',
    },
    title: {
        marginTop: 8,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    }
});