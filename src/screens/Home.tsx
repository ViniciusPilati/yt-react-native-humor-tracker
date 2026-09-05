import { Text, View } from "react-native";
import { Footer } from "../shared/components/Footer";
import { Header } from "../shared/components/Header";

export const HomePage = () => {
	return (
		<>
			<Header name="Vinicius" />

			<View style={{ flex: 1 }}></View>
			<Footer>
				<Text>Home</Text>
			</Footer>
		</>
	);
};
