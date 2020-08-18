import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [state,dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            types:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img 
                src={image} 
                alt="product image" 
                className="checkoutProduct__image"
            />
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">{title}</div>
                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>
                                <img src="/image/star.png"  width="20"/>
                            </p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
