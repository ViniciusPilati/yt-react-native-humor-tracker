import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native"
import { HomePage } from "./screens/Home";
import { createStaticNavigation } from "@react-navigation/native";
import { DetailPage } from "./screens/Detail";
import { SetUserName } from "./screens/SetUserName";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomePage,
    detail: DetailPage,
    setUserName: SetUserName,
  },
});

const Navigation = createStaticNavigation(RootStack);

export const AppRoutes = () => {
   return <Navigation />;
}