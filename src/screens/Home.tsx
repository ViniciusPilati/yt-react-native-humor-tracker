import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import type { TNavigationScreenProps } from "../Routes";

export const HomePage = () => {
	const navigation = useNavigation<TNavigationScreenProps>();

	return (
		<>
			<Text>Home</Text>
			<Button title="Go to Details" onPress={() => navigation.navigate("detail", { rate: 5 })} />

			<Button title="Go to SetUserName" onPress={() => navigation.navigate("setUserName")} />
		</>
	);
};
