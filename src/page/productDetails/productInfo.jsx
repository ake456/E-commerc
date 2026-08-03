import React, { useContext } from 'react'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'
import { FaRegHeart, FaShare } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './productdetails.css';

function productInfo({ product }) {

    const { cartItems, addToCart, addToFav, removeFromFav, favorites } = useContext(CartContext)
    const navigate = useNavigate();
    const isINCart = cartItems.some(i => i.id === product.id);
    const isINFav = favorites.some(i => i.id === product.id);



    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className='toast_wrapper'>
                <img src={product.images[0]} alt="" className='toast_img' />
                <div className="toast_content">
                    <strong>{product.title}</strong>
                    added to cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    }

    const handleAddToFav = () => {
        if (isINFav) {
            removeFromFav(product.id)
            toast.error(
                <div className='toast_wrapper'>
                    <img src={product.images[0]} alt="" className='toast_img' />
                    <div className="toast_content">
                        <strong>{product.title}</strong>
                        removed from favorites
                        <button className='btn' onClick={() => navigate('/favorites')}>View Favorites</button>
                    </div>
                </div>
                , { duration: 3500 }
            )
        } else {
            addToFav(product)
            toast.success(
                <div className='toast_wrapper'>
                    <img src={product.images[0]} alt="" className='toast_img' />
                    <div className="toast_content">
                        <strong>{product.title}</strong>
                        added to favorites
                        <button className='btn' onClick={() => navigate('/favorites')}>View Favorites</button>
                    </div>
                </div>
                , { duration: 3500 }
            )
        }

    }


    return (
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>

            <p className='price'>$ {product.price}</p>
            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
            <h5>Brand: <span>{product.brand || "No Brand"}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5><span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
            <button onClick={handleAddToCart} className={`btn ${isINCart ? 'in-cart' : ''}`}>

                {isINCart ? "item in cart" : "Add to cart"} <TiShoppingCart />
            </button>

            <div className="icons">
                <span className={`${isINFav ? "in_fav" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </div>
    )
}

export default productInfo
