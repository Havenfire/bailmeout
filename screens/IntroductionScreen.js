import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IntroductionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.premise}>
        <Text style={[styles.heading, styles.headingFlexBox]}>
          {"I need something to bail me out!\n"}
        </Text>

        <Text style={styles.headingFlexBox}>
          {"THE PREMISE IS SIMPLE, YOU AND YOUR FRIEND BOTH WANT TO CANCEL, BUT DON'T WANT TO BE THE ONE TO SAY IT. \n\nYOU BOTH USE BAILMEOUT (NOW!), AND CANCEL YOUR PLANS WITHOUT ANY AWKWARDNESS"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("LoginMobilePhone")}
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
  premise: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: Border.br_29xl,
    marginBottom: 24,
    width: "80%",
  },
  headingFlexBox: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 34,
    marginBottom: 16,
  },
  heading: {
    fontSize: 25,
    textTransform: "uppercase",
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

export default IntroductionScreen;
