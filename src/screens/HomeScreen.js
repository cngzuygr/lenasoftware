import {
	FlatList,
	StyleSheet,
	View,
	RefreshControl,
	ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { ItemContext } from "../context/ItemContext";

const BASE_URL = "https://www.lenasoftware.com/api/v1/en/maestro/1";
const HomeScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [pageCounter, setPageCounter] = useState(2);
	const [refreshing, setRefreshing] = useState(false);
	const { selectItem } = useContext(ItemContext);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		try {
			const response = await fetch(`${BASE_URL}`);
			const json = await response.json();
			setPosts(json.result);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	const handleLoadMore = async () => {
		try {
			const response = await fetch(`${BASE_URL}?page=${pageCounter}`);
			setPageCounter(pageCounter + 1);
			const json = await response.json();
			setPosts((prevPosts) => [...prevPosts, ...json.result]);
		} catch (error) {
			console.error(error);
		}
	};

	const onRefresh = async () => {
		setRefreshing(true);
		try {
			const response = await fetch(`${BASE_URL}`);
			const json = await response.json();
			setPosts(json.result);
			setPageCounter(2);
		} catch (error) {
			console.error(error);
		}

		setRefreshing(false);
	};

	const handleItemPress = (item) => {
		selectItem(item);
		navigation.navigate("DetailsScreen");
	};

	const renderItem = ({ item }) => (
		<ListItem
			key={item.id}
			item={item}
			onPress={(e) => handleItemPress(item)}
		/>
	);

	if (isLoading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size={"large"} color={"#222FAC"} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={renderItem}
				numColumns={1}
				// showsVerticalScrollIndicator={false}
				keyExtractor={(item, _i) => _i}
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.05}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
});
