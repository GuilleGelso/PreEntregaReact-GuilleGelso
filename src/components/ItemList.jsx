import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
	return data.map((prod) => <Item key={prod.id} info={prod} />);
};

export default ItemList;