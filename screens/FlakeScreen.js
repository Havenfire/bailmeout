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
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SwipeUpComponent from "../components/SwipeUpComponent";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const FlakeScreen = () => {
  const navigation = useNavigation();

  const onIconUserPlusClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onIconUserPlus1Click = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onIconUserPlus2Click = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onIconUserPlus3Click = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onIconUserPlus4Click = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onIconUserPlus5Click = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Need to bail?",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <View style={styles.flakeScreen}>
      <View style={styles.nativeStatusBar}>
        <Text style={styles.text}>9:41</Text>
        <Image
          style={styles.nativeStatusBarChild}
          contentFit="cover"
          source={require("../assets/frame-20.png")}
        />
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <TouchableOpacity
          style={styles.switchScreenButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AddContactsScreen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/switch-screen-button1.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.flakeEveryoneHere, styles.frameFlexBox]}>
          Flake everyone here!
        </Text>
      </View>
      <SwipeUpComponent
        swipeUpComponentPosition="relative"
        swipeUpComponentTop="unset"
        swipeUpComponentLeft="unset"
        swipeUpComponentMarginTop={46}
        onIconUserPlusPress={onIconUserPlusClick}
        onIconUserPlusPress1={onIconUserPlus1Click}
        onIconUserPlusPress2={onIconUserPlus2Click}
        onIconUserPlusPress3={onIconUserPlus3Click}
        onIconUserPlusPress4={onIconUserPlus4Click}
        onIconUserPlusPress5={onIconUserPlus5Click}
      />
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
