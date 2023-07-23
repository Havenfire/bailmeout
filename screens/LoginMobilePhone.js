import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimeContainer from "../components/TimeContainer";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginMobilePhone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginMobilePhone}>
      <Pressable
        style={[styles.controlsButtons, styles.controlsLayout]}
        onPress={() => navigation.navigate("NoContactsScreen")}
      >
        <View
          style={[styles.controlsButtons1, styles.controlsButtons1Position]}
        >
          <Text style={styles.text}>Log in</Text>
        </View>
      </Pressable>
      <Text style={styles.youWillReceive}>
        You will receive an SMS verification that may apply message and data
        rates.
      </Text>
      <TextInput
        style={[styles.controlsTextFields, styles.signInTypo]}
        placeholder="(123) 456-7890"
        keyboardType="number-pad"
        autoCapitalize="none"
        secureTextEntry={false}
        placeholderTextColor="#72777a"
        maxLength={10}
      />
      <View
        style={[
          styles.navigationBarLargeTitle,
          styles.controlsButtons1Position,
        ]}
      >
        <Text style={[styles.welcome, styles.signInFlexBox]}>Welcome!</Text>
        <Text style={[styles.signIn, styles.signInFlexBox]}>
          Sign in / Log in to your account
        </Text>
      </View>
      <TimeContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsLayout: {
    borderRadius: Border.br_29xl,
    height: 48,
  },
  controlsButtons1Position: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  signInTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  signInFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.white,
  },
  text: {
    marginTop: -8,
    marginLeft: -22.5,
    top: "50%",
    left: "50%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  controlsButtons1: {
    bottom: 0,
    backgroundColor: Color.gray_100,
    height: 48,
    borderRadius: Border.br_29xl,
  },
  controlsButtons: {
    bottom: 61,
    height: 48,
    left: 24,
    right: 24,
    position: "absolute",
  },
  youWillReceive: {
    top: 264,
    fontSize: FontSize.size_xs,
    color: "#6c7072",
    width: 327,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    left: 24,
    position: "absolute",
  },
  controlsTextFields: {
    top: 200,
    borderRadius: 8,
    height: 48,
    left: 24,
    right: 24,
    position: "absolute",
  },
  welcome: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  signIn: {
    lineHeight: 24,
    marginTop: 8,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  navigationBarLargeTitle: {
    top: 92,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  loginMobilePhone: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginMobilePhone;
