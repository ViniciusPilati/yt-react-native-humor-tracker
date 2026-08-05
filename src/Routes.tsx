import { createStaticNavigation, type RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator, type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DetailPage } from "./screens/Detail";
import { HomePage } from "./screens/Home";
import { SetUserName } from "./screens/SetUserName";

type TScreenDefinitions = {
	home: undefined;
	detail: { rate: number };
	setUserName: undefined;
};

const RootStack = createNativeStackNavigator<TScreenDefinitions>({
	screens: {
		home: HomePage,
		detail: DetailPage,
		setUserName: SetUserName,
	},
});

const Navigation = createStaticNavigation(RootStack);

export const AppRoutes = () => {
	return <Navigation />;
};

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;
