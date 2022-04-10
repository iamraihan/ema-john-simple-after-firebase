import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    // console.log(props.product)
    const { img, name, price, ratings, seller } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <div className="product-info">
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Ratings: {ratings}Stars</small></p>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>

        </div>
    );
};

export default Product;