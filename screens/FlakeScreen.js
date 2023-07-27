import React, { useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Share,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const FlakeScreen = ({ route }) => {
  const navigation = useNavigation();

  contactList = route.params;
  console.log(contactList)


  return (
    <View style={styles.flakeScreen}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <TouchableOpacity
          style={styles.switchScreenButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AddContactsScreen")}
        >
        </TouchableOpacity>
        <Text style={[styles.flakeEveryoneHere, styles.frameFlexBox]}>
          Flake everyone here!
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameFlexBox: {
    justifyContent: "center",
    width: 279,
    alignItems: "center",
  },
  text: {
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_200,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  nativeStatusBarChild: {
    width: 71,
    height: 13,
    marginLeft: 225,
  },
  nativeStatusBar: {
    width: 375,
    height: 44,
    flexDirection: "row",
    paddingLeft: 30,
    paddingTop: Padding.p_base,
    paddingRight: 16,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.darkslategray,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  switchScreenButton: {
    width: 101,
    height: 101,
  },
  flakeEveryoneHere: {
    letterSpacing: 0.2,
    lineHeight: 18,
    fontFamily: FontFamily.montserratRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    height: 31,
    marginTop: 74,
    fontSize: FontSize.size_base,
  },
  frame: {
    height: 206,
    marginTop: 46,
    overflow: "hidden",
    justifyContent: "center",
    width: 279,
  },
  flakeScreen: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.darkslategray,
  },
});

export default FlakeScreen;
