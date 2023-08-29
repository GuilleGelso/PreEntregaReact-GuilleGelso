
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"




export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()



    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('/data/products.json')
            const products = await response.json()

            const productoFiltrado = products.find(product => product.id === parseInt(id))


            setDetail(productoFiltrado)
        }
        getProduct()
    }, [id])

    return (

        <ItemDetail detail={detail} />
    )
}