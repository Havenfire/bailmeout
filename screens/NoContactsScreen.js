import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const NoContactsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.noContactsScreen}>
      <TouchableOpacity
        style={[styles.controlsButtons, styles.controlsLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("AddContactsScreen")}
      >
        <View style={[styles.controlsButtons1, styles.nativeStatusBarPosition]}>
          <Text style={[styles.text, styles.textTypo]}>Import Contacts</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style={styles.nativeStatusBarPosition} barStyle="default" />
      <Text style={[styles.noContacts, styles.textTypo]}>
        It appears you have no one to make plans with...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsLayout: {
    height: 48,
    borderRadius: Border.br_29xl,
  },
  nativeStatusBarPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text: {
    marginTop: -8,
    marginLeft: -61.5,
    top: "50%",
    left: "50%",
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  controlsButtons1: {
    bottom: 0,
    backgroundColor: Color.gray_100,
    height: 48,
    borderRadius: Border.br_29xl,
  },
  controlsButtons: {
    right: 24,
    bottom: 61,
    left: 24,
    position: "absolute",
    height: 48,
    borderRadius: Border.br_29xl,
  },
  noContacts: {
    top: 234,
    left: 48,
    letterSpacing: 0.2,
    lineHeight: 18,
    fontFamily: FontFamily.montserratRegular,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 279,
    height: 31,
  },
  noContactsScreen: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.darkslategray,
  },
});

export default NoContactsScreen;
