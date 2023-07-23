import React from "react";
import { Pressable, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimeContainer from "../components/TimeContainer";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginMobilePhone = () => {
  const navigation = useNavigation();


  return (


    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.signInText}>Sign in / Log in to your account</Text>
      </View>

      <TextInput
        style={styles.phoneNumberInput}
        placeholder="(123) 456-7890"
        keyboardType="number-pad"
        returnKeyType={ 'done' }
        autoCapitalize="none"
        placeholderTextColor="#72777a"
        maxLength={10}
      />

      <Text style={styles.infoText}>
        You will receive an SMS verification that may apply message and data rates.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("NoContactsScreen")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.darkslategray,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    borderRadius: Border.br_29xl,
    height: 48,
    width: "80%",
    backgroundColor: Color.gray_100,
    marginBottom: 24,
  },
  loginButtonInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  infoText: {
    fontSize: FontSize.size_xs,
    color: "#6c7072",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    marginBottom: 24,
    width: "80%",
  },
  phoneNumberInput: {
    borderRadius: 8,
    height: 48,
    width: "80%",
    paddingHorizontal: 16,
    backgroundColor: Color.white,
    marginBottom: 24,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: FontFamily.interBold,
    color: Color.white,
  },
  signInText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    marginTop: 8,
  },

  button: {
    position: "absolute",
    bottom: 24,
    backgroundColor: Color.gray_100,
    width: "80%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_29xl,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
});

export default LoginMobilePhone;
