import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TimeContainer = () => {
  return (
    <View style={styles.nativeStatusBar}>
      <Text style={[styles.text, styles.iconPosition]}>9:41</Text>
      <Image
        style={[styles.mobileSignalIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mobile-signal.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -6,
    left: 30,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_200,
    textAlign: "left",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 69,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 49,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 16,
    width: 27,
    height: 13,
  },
  nativeStatusBar: {
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: Color.darkslategray,
    height: 44,
    position: "absolute",
  },
});

export default TimeContainer;
