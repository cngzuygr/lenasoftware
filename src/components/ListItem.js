import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ListItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={styles.container}
			onPress={onPress}
		>
			<Image
				style={styles.image}
				resizeMethod="resize"
				resizeMode="stretch"
				source={{
					uri: item.banner,
				}}
			/>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.subTitle}>{item.summary}</Text>
			<Text style={styles.readingTime}>
				{Math.abs(item.totalReadingTime)} min read{" "}
				{
					// Math.abs to prevent negative reading times(i.e first post from api request)
				}
			</Text>
		</TouchableOpacity>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		marginBottom: 50,
		alignSelf: "center",
		backgroundColor: "#222FAC88",
		borderRadius: 20,
	},
	image: {
		height: 200,
		width: "100%",
		borderRadius: 20,
		marginBottom: 10,
	},
	title: {
		fontFamily: "Graphik",
		fontSize: 22,
		color: "white",
		marginHorizontal: 10,
		textAlign: "left",
	},
	subTitle: {
		fontFamily: "Graphik",
		fontSize: 14,
		color: "#FFFFFFbb",
		padding: 10,
		textAlign: "justify",
	},
	readingTime: {
		fontFamily: "Graphik",
		fontSize: 14,
		color: "#FFFFFF",
		paddingBottom: 10,
		paddingHorizontal: 10,
		textAlign: "justify",
		alignSelf: "flex-end",
	},
});
