import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Order from "./Order";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";



export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("categoryId", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

	return (
		<>
		
			<Order greeting={texto} />
			<Container>
			<Row>
			<ItemList data={data} />
			</Row>
			</Container>
		</>
	);
};

export default ItemListContainer;