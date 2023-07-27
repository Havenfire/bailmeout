import React, { useState } from 'react';
import { Text, StyleSheet, Modal, Pressable, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import * as Contacts from 'expo-contacts';

const NoContactsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);



  const importContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
      }

      // console.log(data);

      for (let i = 0; i < data.length; i++) {
        if(true) {
          data[0].hasApp = true
        }
        else
        {
          data[0].hasApp = false
        }
      }


      // navigation.navigate("FlakeScreen", {
      //   contactList: data,
      // });
      
    }
    else {
      setModalVisible(true)
    }

  };


  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You cannot use this app without syncing your contacts! We will use this to make sure other users have the app, and so you can invite people easier. You may need to enable contacts in settings and reload the app</Text>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.noContacts}>
        It appears you have no one to make plans with...
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={importContacts}
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default NoContactsScreen;
