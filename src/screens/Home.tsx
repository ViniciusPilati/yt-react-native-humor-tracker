import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import type { TNavigationScreenProps } from "../Routes";
import { Header } from "../shared/components/Header";

export const HomePage = () => {
	const navigation = useNavigation<TNavigationScreenProps>();

	return (
		<>
			<Header name="Vinicius" />

			<Text>Home</Text>
			<Button title="Go to Details" onPress={() => navigation.navigate("detail", { rate: 5 })} />

			<Button title="Go to SetUserName" onPress={() => navigation.navigate("setUserName")} />
		</>
	);
};
