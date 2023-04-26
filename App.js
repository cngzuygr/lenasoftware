import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { ItemProvider } from "./src/context/ItemContext";

import Navigation from "./src/navigation";

export default function App() {
	const [fonts] = useFonts({
		Graphik: require("./assets/fonts/GraphikRegular.otf"),
		Grold: require("./assets/fonts/GroldRoundedSlim-SemiLight.ttf"),
	});

	if (!fonts) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size={"large"} color={"#222FAC"} />
			</View>
		);
	}

	return (
		<ItemProvider>
			<Navigation />
		</ItemProvider>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
});
