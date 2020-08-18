import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Subtotal } from './Subtotal';

function Checkout() {
    const [state] = useStateValue();
    const  {basket} = state;
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" 
                    alt="" 
                    className="checkout__ad"
                />
                {
                    basket?.length === 0 ? 
                    (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
                            <p>you have no item in the basket.To buy one or add click "Add To Basket" next to item</p>
                        </div>
                    ) :
                    (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {
                                basket.map((item) => (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                        key={item.id}
                                    />
                                ))
                            }
                            
                        </div>
                    )
                }
            </div>
            <div className="checkout__right">
                 <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
