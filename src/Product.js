import React from 'react';
import './Product.css';

function Product({id, title, price, rating, image}) {
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
            <button>Add to basket</button>
        </div>
    )
}

export default Product
