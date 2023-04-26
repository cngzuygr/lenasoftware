import {
	Image,
	ScrollView,
	StyleSheet,
	View,
	useWindowDimensions,
} from "react-native";
import React, { useContext } from "react";
import RenderHtml from "react-native-render-html";
import { ItemContext } from "../context/ItemContext";

const DetailsScreen = () => {
	const { selectedItem } = useContext(ItemContext);
	const { width } = useWindowDimensions();

	const source = {
		html: `
	  ${selectedItem.content}`,
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image
					style={styles.image}
					resizeMethod="resize"
					resizeMode="center"
					source={{
						uri: selectedItem.image,
					}}
				/>
				<View style={styles.html}>
					<RenderHtml contentWidth={width} source={source} />
				</View>
			</ScrollView>
		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#fff" },
	image: {
		height: 300,
		width: "100%",
		marginBottom: 10,
	},
	html: {
		paddingHorizontal: 10,
		marginBottom: 25,
	},
});
