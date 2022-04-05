import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import ItemCount from '../ItemCount/ItemCount'
import { getProducts } from '../../dataMock'
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting, variant }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then((res) => {
            setItems(res);
        })
    }, [])

    //Add to cart function
    const onAdd = (quantity) => {
        console.log(quantity)
    }

    return (
        <ItemsContainer className="itemListContainer">
            <h1 className='gap-bot'>{greeting}</h1>
            <div style={{margin: "0 auto 20px auto"}}>
                <ItemCount stock={ 10 } initial={ 5 } onAdd={ onAdd } />
            </div>
            <Items variant={variant}>
                {items.map(item => <Item variant={variant} data={item} onAdd={onAdd} key={item.id} />)}
            </Items>
        </ItemsContainer>
    )
}

export default ItemListContainer

const ItemsContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(
        ${(props) => props.variant === 2 ? "300px" : "200px"}, 1fr
    ));
    row-gap: ${(props) => props.variant === 2 ? "3px" : "26px"};
`;