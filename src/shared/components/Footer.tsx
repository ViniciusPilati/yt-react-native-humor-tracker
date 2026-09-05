import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Theme } from "../themes/Theme";

interface IFooterProps {
	children: ReactNode;
}

export const Footer = ({ children }: IFooterProps) => {
	const insets = useSafeAreaInsets();

	return <View style={{ ...styles.footerContainer, paddingBottom: insets.bottom + 16 }}>{children}</View>;
};

const styles = StyleSheet.create({
	footerContainer: {
		borderTopEndRadius: 24,
		borderTopLeftRadius: 24,
		padding: 16,
		backgroundColor: Theme.colors.paper,
		...Theme.shadows.default,
	},
});
