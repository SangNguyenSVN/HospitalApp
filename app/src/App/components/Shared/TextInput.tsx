import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const TextInput = ({ title, onChangeText }: any) => {
    const [input, setInput] = useState<string>('');
    const handleText = (text: string) => {
        setInput(text)
        onChangeText(text)
    };
    return (
        <TextInput
            style={styles.item_Input}
            title={title}
            value={input}
            onChangeText={handleText}
        >
        </TextInput>
    )
}

export default TextInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    viewItem_Input: {


    },
    item_Input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        justifyContent: 'center',
        fontSize: 20
    },
})