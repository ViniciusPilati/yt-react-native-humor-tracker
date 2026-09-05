import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../themes/Theme";

interface IHeaderProps {
	name?: string;
}

export const Header = ({ name }: IHeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Olá,</Text>
			<Text style={styles.headerBoldText}>{name ? name : `Seu nome é?`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	headerText: {
		fontSize: Theme.fonts.sizes.title,
		fontFamily: Theme.fonts.family.regular,
	},
	headerBoldText: {
		color: Theme.colors.primary,
		fontSize: Theme.fonts.sizes.title,
		fontFamily: Theme.fonts.family.bold,
	},
});
