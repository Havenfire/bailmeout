import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import InviteContact from "./InviteContact";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SwipeUpComponent = ({
  swipeUpComponentPosition,
  swipeUpComponentTop,
  swipeUpComponentLeft,
  swipeUpComponentMarginTop,
  onIconUserPlusPress,
  onIconUserPlusPress1,
  onIconUserPlusPress2,
  onIconUserPlusPress3,
  onIconUserPlusPress4,
  onIconUserPlusPress5,
}) => {
  const swipeUpComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", swipeUpComponentPosition),
      ...getStyleValue("top", swipeUpComponentTop),
      ...getStyleValue("left", swipeUpComponentLeft),
      ...getStyleValue("marginTop", swipeUpComponentMarginTop),
    };
  }, [
    swipeUpComponentPosition,
    swipeUpComponentTop,
    swipeUpComponentLeft,
    swipeUpComponentMarginTop,
  ]);

  return (
    <View style={[styles.swipeUpComponent, swipeUpComponentStyle]}>
      <View style={[styles.searchBar, styles.searchBarFlexBox]}>
        <View style={[styles.stateLayer, styles.contentFlexBox]}>
          <View style={[styles.stateLayer1, styles.searchBarFlexBox]}>
            <Image
              style={styles.iconssearch24px}
              contentFit="cover"
              source={require("../assets/iconssearch-24px.png")}
            />
          </View>
          <TextInput
            style={[styles.content, styles.contentFlexBox]}
            placeholder="Search"
            autoCapitalize="words"
            placeholderTextColor="#161925"
          />
        </View>
      </View>
      <ScrollView
        style={styles.inviteContactParent}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.inviteLayout}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
        <View style={[styles.inviteContact1, styles.inviteLayout]}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
            onIconUserPlusPress={onIconUserPlus1Click}
          />
        </View>
        <View style={[styles.inviteContact1, styles.inviteLayout]}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
            onIconUserPlusPress={onIconUserPlus2Click}
          />
        </View>
        <View style={[styles.inviteContact1, styles.inviteLayout]}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
            onIconUserPlusPress={onIconUserPlus3Click}
          />
        </View>
        <View style={[styles.inviteContact1, styles.inviteLayout]}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
            onIconUserPlusPress={onIconUserPlus4Click}
          />
        </View>
        <View style={[styles.inviteContact1, styles.inviteLayout]}>
          <InviteContact
            ellipse4={require("../assets/ellipse-41.png")}
            ellipse5={require("../assets/ellipse-52.png")}
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
            onIconUserPlusPress={onIconUserPlus5Click}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchBarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentFlexBox: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inviteLayout: {
    height: 50,
    width: 343,
  },
  iconssearch24px: {
    width: 24,
    height: 24,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
  },
  content: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    marginLeft: 4,
    flex: 1,
  },
  stateLayer: {
    padding: Padding.p_9xs,
    flex: 1,
  },
  searchBar: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.samiWhite,
    width: 328,
    height: 56,
    overflow: "hidden",
    zIndex: 0,
  },
  inviteContact1: {
    marginTop: 18,
  },
  inviteContactParent: {
    position: "absolute",
    width: "91.44%",
    top: "17.23%",
    right: "4.28%",
    bottom: "0%",
    left: "4.28%",
    maxWidth: "91.44%",
    zIndex: 1,
    flex: 1,
  },
  swipeUpComponent: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightsteelblue,
    width: 375,
    height: 470,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
  },
});

export default SwipeUpComponent;
