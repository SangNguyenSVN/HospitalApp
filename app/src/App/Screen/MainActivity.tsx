import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const MainActivity = () => {
  return (
    <View style={styles.container}>  
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
    </View>
  )
}

export default MainActivity

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  }
})