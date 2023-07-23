import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IntroductionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introductionScreen}>
      <View style={styles.premise}>
        <Text style={[styles.heading, styles.headingFlexBox]}>{`i need something

to bail me out!`}</Text>
        <Text
          style={[styles.premise1, styles.headingFlexBox]}
        >{`THE PREMISE IS SIMPLE, YOU AND YOUR FRIEND BOTH WANT TO CANCEL, BUT DON’T WANT TO BE THE ONE SAY IT.

YOU BOTH USE BAILMEOUT (NOW!), AND CANCEL YOUR PLANS WITHOUT ANY AWKWARDNESS`}</Text>
      </View>
      <TouchableOpacity
        style={[styles.controlsButtons, styles.controlsLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("LoginMobilePhone")}
      >
        <Pressable
          style={[styles.controlsButtons1, styles.controlsLayout]}
          onPress={() => navigation.navigate("LoginMobilePhone")}
        >
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 22,
    textAlign: "center",
    color: Color.white,
    fontWeight: "500",
    position: "absolute",
  },
  controlsLayout: {
    height: 48,
    borderRadius: Border.br_29xl,
    position: "absolute",
  },
  heading: {
    top: 0,
    fontSize: 30,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    height: 92,
    left: 0,
    width: 319,
  },
  premise1: {
    top: 112,
    left: 43,
    fontSize: 17,
    letterSpacing: 0.2,
    width: 242,
  },
  premise: {
    top: 145,
    left: 28,
    height: 354,
    width: 319,
    position: "absolute",
  },
  text: {
    marginTop: -8,
    marginLeft: -17.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.white,
    fontWeight: "500",
    position: "absolute",
  },
  controlsButtons1: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.gray_100,
    left: 0,
  },
  controlsButtons: {
    right: 24,
    bottom: 61,
    left: 24,
  },
  introductionScreen: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.darkslategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default IntroductionScreen;
