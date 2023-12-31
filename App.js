const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import LoginMobilePhone from "./screens/LoginMobilePhone";
import NoContactsScreen from "./screens/NoContactsScreen";
import AddContactsScreen from "./screens/AddContactsScreen";
import FlakeScreen from "./screens/FlakeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const App = () => {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IntroductionScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroductionScreen"
              component={IntroductionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginMobilePhone"
              component={LoginMobilePhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoContactsScreen"
              component={NoContactsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddContactsScreen"
              component={AddContactsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlakeScreen"
              component={FlakeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
