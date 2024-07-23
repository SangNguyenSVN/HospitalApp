import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions, Pressable, StyleSheet, Text, Image } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./useWarmUpBrowser";

const SignInWithFacebook = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_facebook" });
  
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  return (
    <Pressable onPress={onPress} style={styles.pressLog}>
      <Image style={styles.img_icon} source={require("../asset/icon/google_icon.png")} />
    </Pressable>
  )
}

export default SignInWithFacebook

const styles = StyleSheet.create({
    pressLog: {
        width: 40,
        height: 40
      },
      img_icon: {
        width: 40,
        height: 40
      }
})