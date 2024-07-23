import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from 'expo-router';
import ButtonRegister from './ButtonRegister';
import { validateName, validateEmail } from '../../services/CheckForm'


const RegisterForm = () => {
  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [userNameErr, setUserNameErr] = useState<string>('1')
  const [passWordErr, setPasswordErr] = useState<string>('1')
  const [emailErr, setEmailErr] = useState<string>('1')


  const handleEmailChange = (emailChange: string) => {
    setEmail(emailChange);
    
  };
  const handleUserNameChange = (userNameChange: string) => {
    setUserName(userNameChange);
    setUserNameErr(userNameChange)
  };
  const handlePasswordChange = (passWord: string) => {
    setPassword(passWord);
    
  }
  

  return (
    <ImageBackground style={styles.container} source={require('../../asset/poster-bg-img.png')}>
      <BlurView blurReductionFactor={2} intensity={10} style={styles.form}>
        <KeyboardAwareScrollView
          scrollEnabled={false}
        >
          <View style={{ marginVertical: 100, justifyContent: 'space-between', height: '100%' }}>
            <View>
              <Text style={styles.txtHeader}>Register</Text>
              <View style={styles.viewBox}>
                <Text style={styles.viewTxt}>FullName</Text>
                <TextInput
                  value={userName}
                  onChangeText={handleUserNameChange}
                  editable
                  style={styles.viewInput} />
                  {validateName(userNameErr)?(<></>):(<><Text></Text></>)}
              </View>
              <View style={styles.viewBox}>
                <Text style={styles.viewTxt}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={handleEmailChange}
                  editable
                  style={styles.viewInput} />
              </View>
              <View style={styles.viewBox}>
                <Text style={styles.viewTxt}>Password</Text>
                <TextInput
                  value={passWord}
                  onChangeText={handlePasswordChange}
                  editable
                  style={styles.viewInput} />
              </View>
            </View>
            <ButtonRegister
              title={'Submit'}
              name={userName}
              email={email}
              password={passWord} />
          </View>

        </KeyboardAwareScrollView>
      </BlurView>
    </ImageBackground>


  )
}

export default RegisterForm

const styles = StyleSheet.create({
  container: {

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


})