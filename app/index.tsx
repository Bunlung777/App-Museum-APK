import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import DetailMuseum2 from "../screens/DetailMuseum2";
import DetailMuseum from "../screens/DetailMuseum";
import AllMuseum from "../screens/AllMuseum";
import Notification1 from "../screens/Notification1";
import Makeby from "../screens/Makeby";

// Import custom fonts if needed
// import { useFonts } from "expo-font";

// const [fontsLoaded, error] = useFonts({
//   "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
//   "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
//   "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
//   "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
//   "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
//   "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
// });

// if (!fontsLoaded && !error) {
//   return null;
// }

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      {hideSplashScreen && (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="DetailMuseum2" component={DetailMuseum2} /> */}
          <Stack.Screen name="DetailMuseum" component={DetailMuseum} />
          <Stack.Screen name="AllMuseum" component={AllMuseum} />
          <Stack.Screen name="Notification1" component={Notification1} />
          <Stack.Screen name="Makeby" component={Makeby} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default App;
