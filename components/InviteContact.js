import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InviteContact = ({
  ellipse4,
  ellipse5,
  iconUserPlus,
  inviteContactPosition,
  inviteContactWidth,
  inviteContactHeight,
  inviteContactTop,
  inviteContactRight,
  inviteContactBottom,
  inviteContactLeft,
  businessBroColor,
  iconUserPlusMaxWidth,
  iconUserPlusOverflow,
  iconUserPlusMaxHeight,
  onIconUserPlusPress,
}) => {
  const inviteContactStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inviteContactPosition),
      ...getStyleValue("width", inviteContactWidth),
      ...getStyleValue("height", inviteContactHeight),
      ...getStyleValue("top", inviteContactTop),
      ...getStyleValue("right", inviteContactRight),
      ...getStyleValue("bottom", inviteContactBottom),
      ...getStyleValue("left", inviteContactLeft),
    };
  }, [
    inviteContactPosition,
    inviteContactWidth,
    inviteContactHeight,
    inviteContactTop,
    inviteContactRight,
    inviteContactBottom,
    inviteContactLeft,
  ]);

  const businessBroStyle = useMemo(() => {
    return {
      ...getStyleValue("color", businessBroColor),
    };
  }, [businessBroColor]);

  const iconUserPlusStyle = useMemo(() => {
    return {
      ...getStyleValue("maxWidth", iconUserPlusMaxWidth),
      ...getStyleValue("overflow", iconUserPlusOverflow),
      ...getStyleValue("maxHeight", iconUserPlusMaxHeight),
    };
  }, [iconUserPlusMaxWidth, iconUserPlusOverflow, iconUserPlusMaxHeight]);

  return (
    <View style={[styles.inviteContact, inviteContactStyle]}>
      <Image
        style={[styles.inviteContactChild, styles.inviteLayout]}
        contentFit="cover"
        source={ellipse4}
      />
      <Text style={[styles.daveLinkd, styles.daveLinkdTypo]}>Dave Linkd</Text>
      <Text
        style={[styles.businessBro, styles.daveLinkdTypo, businessBroStyle]}
      >
        Business Bro
      </Text>
      <Image
        style={[styles.inviteContactItem, styles.inviteLayout]}
        contentFit="cover"
        source={ellipse5}
      />
      <Image
        style={[styles.iconUserPlus, styles.inviteLayout, iconUserPlusStyle]}
        contentFit="cover"
        source={iconUserPlus}
        onPress={onIconUserPlusPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inviteLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  daveLinkdTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    left: "16.91%",
    position: "absolute",
  },
  inviteContactChild: {
    height: "100%",
    width: "14.58%",
    top: "0%",
    right: "85.42%",
    bottom: "0%",
    left: "0%",
  },
  daveLinkd: {
    top: "12%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    color: Color.black,
  },
  businessBro: {
    top: "52%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    color: "#979797",
  },
  inviteContactItem: {
    height: "80%",
    width: "11.66%",
    top: "10%",
    right: "0%",
    bottom: "10%",
    left: "88.34%",
  },
  iconUserPlus: {
    height: "40%",
    width: "5.83%",
    top: "28%",
    right: "2.92%",
    bottom: "32%",
    left: "91.25%",
  },
  inviteContact: {
    width: 343,
    height: 50,
  },
});

export default InviteContact;
