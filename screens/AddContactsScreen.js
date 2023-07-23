import React, { useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  Pressable,
  TouchableOpacity,
  Share,
} from "react-native";
import SwipeUpComponent from "../components/SwipeUpComponent";
import TimeContainer from "../components/TimeContainer";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AddContactsScreen = () => {
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
    <View style={styles.addContactsScreen}>
      <SwipeUpComponent
        swipeUpComponentPosition="absolute"
        swipeUpComponentTop={342}
        swipeUpComponentLeft={0}
        swipeUpComponentMarginTop="unset"
        onIconUserPlusPress={onIconUserPlusClick}
        onIconUserPlusPress1={onIconUserPlus1Click}
        onIconUserPlusPress2={onIconUserPlus2Click}
        onIconUserPlusPress3={onIconUserPlus3Click}
        onIconUserPlusPress4={onIconUserPlus4Click}
        onIconUserPlusPress5={onIconUserPlus5Click}
      />
      <TimeContainer />
      <TouchableOpacity
        style={styles.switchScreenButton}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("FlakeScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/switch-screen-button.png")}
        />
      </TouchableOpacity>
      <Text style={styles.inviteFriendsTo}>
        Invite friends to BailMeOut! If they already have an account, they won’t
        appear here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  switchScreenButton: {
    left: 137,
    top: 90,
    width: 101,
    height: 101,
    position: "absolute",
  },
  inviteFriendsTo: {
    top: 265,
    left: 50,
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    lineHeight: 18,
    fontFamily: FontFamily.montserratRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 279,
    height: 31,
    position: "absolute",
  },
  addContactsScreen: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.darkslategray,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddContactsScreen;
