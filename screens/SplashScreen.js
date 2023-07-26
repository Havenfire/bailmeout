import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_13xl,
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  logoIcon: {
    width: 203,
    height: 203,
  },

});

export default SplashScreen;
