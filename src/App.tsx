import { Inter_400Regular, Inter_400Regular_Italic, Inter_800ExtraBold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AppRoutes } from "./Routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded, error] = useFonts({
		extraBold: Inter_800ExtraBold,
		regularItalic: Inter_400Regular_Italic,
		regular: Inter_400Regular,
	});

	useEffect(() => {
		if (loaded || error) SplashScreen.hideAsync();
	}, [loaded, error]);

	if (!loaded && error) return null;

	return <AppRoutes />;
}
