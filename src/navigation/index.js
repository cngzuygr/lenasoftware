import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen, HomeScreen } from "../screens";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<View style={styles.container}>
							<Image
								style={styles.logo}
								source={require("../../assets/maestroLogo.png")}
							/>
							<Text style={styles.textMaestro}>Maestro</Text>
						</View>
					),
					headerRight: () => <Text style={styles.blog}>Blog</Text>,
				}}
			/>
			<Stack.Screen
				name="DetailsScreen"
				component={DetailsScreen}
				options={{
					headerTitle: "",
					headerRight: () => (
						<View style={styles.container}>
							<Image
								style={styles.logo}
								source={require("../../assets/maestroLogo.png")}
							/>
							<Text style={styles.textMaestro}>Maestro</Text>
						</View>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	textMaestro: {
		fontFamily: "Grold",
		marginLeft: 10,
		fontSize: 24,
	},
	logo: {
		height: 28,
		width: 28,
	},
	blog: {
		fontFamily: "Grold",
		marginLeft: 10,
		fontSize: 24,
		color: "#222FAC",
		marginRight: 10,
	},
});
