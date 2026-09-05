import { createStaticNavigation, type RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator, type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailPage } from "./screens/Detail";
import { HomePage } from "./screens/Home";
import { SetUserName } from "./screens/SetUserName";
import { Theme } from "./shared/themes/Theme";

type TScreenDefinitions = {
	home: undefined;
	detail: { rate: number };
	setUserName: undefined;
};

const RootStack = createNativeStackNavigator<TScreenDefinitions>({
	screens: {
		home: HomePage,
		detail: {
			screen: DetailPage,
			options: {
				presentation: "formSheet",
				sheetAllowedDetents: [0.8, 0.95],
				sheetCornerRadius: 24,
			},
		},
		setUserName: {
			screen: SetUserName,
			options: {
				presentation: "formSheet",
				sheetAllowedDetents: [0.4, 0.6],
				sheetCornerRadius: 24,
			},
		},
	},
	screenOptions: {
		headerShown: false,
		contentStyle: {
			backgroundColor: Theme.colors.background,
		},
	},
	screenLayout: ({ children }) => (
		<SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
			{children}
		</SafeAreaView>
	),
});

const Navigation = createStaticNavigation(RootStack);

export const AppRoutes = () => {
	return <Navigation />;
};

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;
