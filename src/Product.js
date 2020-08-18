import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [state,dispatch] = useStateValue();
    const addToBasket = () => {
        //console.log(state);
        dispatch({
            types:"ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                price: price,
                rating: rating,
                image:image
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating).fill().map((_)=> (
                            <p>
                                <img src="/image/star.png"  width="20"/>
                            </p>
                            ))
                        }
                    </div>
            </div>
            <img src={image} alt="product image"/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
