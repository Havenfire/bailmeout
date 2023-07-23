import React, { useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import InviteContact from "./InviteContact";

const InviteContact1 = () => {
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

  return (
    <View style={styles.inviteContact}>
      <InviteContact
        ellipse4={require("../assets/ellipse-4.png")}
        ellipse5={require("../assets/ellipse-51.png")}
        inviteContactPosition="absolute"
        inviteContactWidth="100%"
        inviteContactHeight="100%"
        inviteContactTop="0%"
        inviteContactRight="0%"
        inviteContactBottom="0%"
        inviteContactLeft="0%"
        businessBroColor="#cbf7ed"
        iconUserPlusMaxWidth="unset"
        iconUserPlusOverflow="unset"
        iconUserPlusMaxHeight="unset"
        onIconUserPlusPress={onIconUserPlusClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inviteContact: {
    width: 343,
    height: 50,
  },
});

export default InviteContact1;
