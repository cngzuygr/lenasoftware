import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	const selectItem = (item) => {
		setSelectedItem(item);
	};

	return (
		<ItemContext.Provider value={{ selectedItem, selectItem }}>
			{children}
		</ItemContext.Provider>
	);
};
