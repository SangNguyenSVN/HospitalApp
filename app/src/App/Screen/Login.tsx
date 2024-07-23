import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const Login = () => {
    return (
        <View style={styles.container}>
            <Stack>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})