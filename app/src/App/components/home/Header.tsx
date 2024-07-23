import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.imageUrl }}
          style={styles.imageUrl} />
        <View >
          <Text style={styles.txtHello}>Hello, 👋</Text>
          <Text style={styles.txtFullname}>{user.fullName}</Text>
        </View>
      </View>
      {/* <TouchableOpacity onPress={} style={styles.press_notification}>
        <Text style={styles.txt_count_notification}>!</Text>
        <FontAwesome name="bell"
          size={30}
          color="black"
        />
      </TouchableOpacity> */}

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  imageUrl: {
    width: 60,
    height: 60,
    borderRadius: 90,
  },
  container: {
    flex:1 ,
    flexDirection: 'row',
    backgroundColor: '#00B2BF',
    maxHeight: '15%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtHello: {
    color: 'white',
    fontSize: 18,
  },
  txtFullname: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 20
  },
  header: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
  },
  viewtxt: {
    
  },
  press_notification: {
    marginHorizontal: 20,
    marginTop: 20
  },
  txt_count_notification: {
    position: 'absolute',
    color: 'blue',
    fontSize: 25,
    bottom: 20,
    right: 1,
    fontWeight: 'bold'

  }
})