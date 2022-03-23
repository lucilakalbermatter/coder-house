import { useEffect, useState } from 'react'
import styled from "styled-components"

const Variant1 = ( { data } ) => {
    const { name, img, author, info, price, stock, initial } = data
    const [count, setCount] = useState(initial)
    
    const addToCart = () => {
        if(count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    const removeFromCart = () => {
        if(count - 1 >= 0) {
            setCount(count - 1)
        }
    }

    const editCart = (e) => {
        const value = e.target.value
        if(value && value > stock) {
            setCount(parseInt(stock))
        } else if(value < 0) {
            setCount(0)
        } else {
            setCount(value)
        }
    }

    return (
        <ItemContainer>
            <ItemPhoto>
                <img src={`${img}`} />
            </ItemPhoto>
            <ItemName>{name}</ItemName>
            <ItemInfo>
                <p>{author}</p>
                <p>{info}</p>
                {/* categorias */}
                <strong>${ price }</strong>
                <CartCount>
                    <CartButton>Agregar al carrito</CartButton>                    
                    <CartControls>
                        <CartButton onClick={() => removeFromCart()}>-</CartButton>
                        <input
                            value={ count }
                            type="number"
                            onChange={(e) => editCart(e)}
                            min={0}
                        />
                        <CartButton onClick={() => addToCart()}>+</CartButton>
                    </CartControls>
                </CartCount>
            </ItemInfo>
        </ItemContainer>
    )
}

export default Variant1

const ItemContainer = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 165px;
    width: 300px;
    padding: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 50px;
    transition: 1s;
    background-color: white;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);

        picture {
            top: -80px;
        }
    }
`;

const CartControls = styled.div`
    display: flex;
    gap: 5px;
`;

const CartButton = styled.button`
    background-color: #FCE100;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    font-weight: bold;
    border-radius: 2px;
    border: none;
    padding: 2px 7px;
    cursor: pointer;
`;

const CartCount = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    gap: 2.25px;

    input {
        width: 78px;
        text-align: center;
    }
`;

const ItemPhoto = styled.picture`
    position: relative;
    top: 0;
    transition: 0.1s;
    
    img {
        position: absolute;
        z-index: -2;
        top: -100px;
        left: 70px;
        width: 120px;
        border-bottom: 1px dashed #F03A17;
        transition: 1s;
    }
`;

const ItemName = styled.strong`
    color: #F03A17;
    font-weight: bold;
    margin-bottom: 5px;
`;


const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        /* text-align: right; */
    }

    div {
        display: flex;
    }

    button {
        background-color: #FCE100;
        color: white;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        cursor: pointer;
        font-weight: bold;
        border-radius: 2px;
        border: none;
        padding: 2px 7px;
    }
`;