import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react"
import Item from '../../components/item'

const ItemListContainer = () => {

    const [listaDeCompras, setListaDeCompras] = useState([])


    const [input, setInput] = useState('')

    const addItem = () => {
        if (input !== '') {


            setListaDeCompras([...listaDeCompras, input])


            setInput('')
        }
    }

    const deleteItem = (nombre) => {

        const nuevaListaDeCompras = listaDeCompras.filter(pr => pr !== nombre)


        setListaDeCompras(nuevaListaDeCompras)
    }

    return (
        <div>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            {
                listaDeCompras.length > 0 ? (
                    <>

                        {listaDeCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem} />)}
                    </>
                ) : (
                    <p>No hay nada en la lista</p>
                )
            }
        </div>
    )
}

export default ItemListContainer