import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import SignInWithGoogle from '../../hooks/SignInWithGoogle';
import { useNavigation } from 'expo-router';
import RegisterForm from '../register/RegisterForm';

const LoginForm = () => {
  const navigation = useNavigation()
  
  return (
    <ImageBackground style={styles.container} source={require('../../asset/poster-bg-img.png')}>
      <BlurView blurReductionFactor={2} intensity={10} style={styles.form}>
        <View>
          <Text style={styles.txtHeader}>Wellcome, 👋</Text>
          <View style={styles.viewBox}>
            <Text style={styles.viewTxt}>Email</Text>
            <TextInput
              numberOfLines={1}
              editable
              style={styles.viewInput} placeholder='' />
          </View>
          <View style={styles.viewBox}>
            <Text style={styles.viewTxt}>Password</Text>
            <TextInput
              numberOfLines={1}
              editable
              style={styles.viewInput} placeholder='' />
          </View>
        </View>
        <View>
          <View style={styles.viewIcon}>
            <View>
              <TouchableOpacity>
                <Text>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <SignInWithGoogle />
          </View>
          <View>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  style={styles.btnLogin}>
              <Text style={styles.txtLogin}>Register</Text>
            </TouchableOpacity> */}
          </View> 
        </View>
      </BlurView>
    </ImageBackground>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 15,
  },
  viewBox: {
    margin: 10
  },
  viewTxt: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
  },
  viewInput: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  txtHeader: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 50,
    color: 'black',

  },
  viewIcon: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  btnLogin: {
    width: '50%',
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  txtLogin: {
    color: 'white',
    fontSize: 17,
    padding: 15,
    letterSpacing: 1.4,
  }
})
