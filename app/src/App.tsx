import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import MainActivity from './App/Screen/MainActivity'

import LoginForm from './App/components/login/LoginForm'
import OtherNavigation from './App/Navigation/OtherNavigation'
import Login from './App/Screen/Login'

const App = () => {

  return (
    <ClerkProvider publishableKey={"pk_test_c3VwZXJiLW9hcmZpc2gtOTQuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <View style={styles.container}>
        <SignedIn>
          <View>
            <MainActivity />
          </View>
        </SignedIn>
        <SignedOut>
          <LoginForm/>
        </SignedOut>
      </View>
    </ClerkProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {

  },
})