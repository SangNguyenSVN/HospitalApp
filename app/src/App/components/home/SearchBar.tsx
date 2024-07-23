import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxtxt}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput placeholder='Search'
                    placeholderTextColor={'gray'}
                    contextMenuHidden={true}
                    clearTextOnFocus={true}
                    dataDetectorTypes={'all'}
                    onChangeText={(value) => console.log(value)}
                    numberOfLines={1}
                    editable
                    style={{ fontSize: 20, marginLeft: 5, width: '90%' }} />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxtxt: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 0.8,
        margin: 10,
        padding: 8,

    }
})