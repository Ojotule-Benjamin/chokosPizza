import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/assets/colors/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    monserratBold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
    monserratMedium: require("./src/assets/fonts/Montserrat-Medium.ttf"),
    monserratRegular: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    monserratSemiBold: require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
