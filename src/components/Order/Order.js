import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [cart, setCart] = useCart()

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/shipment'>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                    {/* how work this line need clear confusion */}
                </div>
            </div>
        </div>
    );
};

export default Order;