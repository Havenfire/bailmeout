import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import Contacts from 'react-native-contacts';


const NoContactsScreen = () => {
  const navigation = useNavigation();

  Contacts.getAll().then(contacts => {
    // contacts returned
  })

  return (
    <View style={styles.container}>
      <Text style={styles.noContacts}>
        It appears you have no one to make plans with...
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("LoginMobilePhone")}
      >
        <Text style={styles.buttonText}>Import Contacts</Text>
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
  noContacts: {
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    marginBottom: 24,
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

export default NoContactsScreen;
