import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaShare, FaRegHeart, FaCheck } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

function Product({ item }) {

    const navigate = useNavigate();

    const { cartItems, addToCart, addToFav, removeFromFav, favorites } = useContext(CartContext)

    const isINCart = cartItems.some(i => i.id === item.id);
    const isINFav = favorites.some(i => i.id === item.id);

    const handleAddToCart = () => {
        addToCart(item)
        toast.success(
            <div className='toast_wrapper'>
                <img src={item.images[0]} alt="" className='toast_img' />
                <div className="toast_content">
                    <strong>{item.title}</strong>
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
            removeFromFav(item.id)
            toast.error(
                <div className='toast_wrapper'>
                    <img src={item.images[0]} alt="" className='toast_img' />
                    <div className="toast_content">
                        <strong>{item.title}</strong>
                        removed from favorites
                        <button className='btn' onClick={() => navigate('/favorites')}>View Favorites</button>
                    </div>
                </div>
                , { duration: 3500 }
            )
        } else {
            addToFav(item)
            toast.success(
                <div className='toast_wrapper'>
                    <img src={item.images[0]} alt="" className='toast_img' />
                    <div className="toast_content">
                        <strong>{item.title}</strong>
                        added to favorites
                        <button className='btn' onClick={() => navigate('/favorites')}>View Favorites</button>
                    </div>
                </div>
                , { duration: 3500 }
            )
        }

    }

    return (
        <div className={`product ${isINCart ? 'in-cart' : ''}`}>
            <Link to={`/products/${item.id}`}>

                <span className='status_cart'><FaCheck /> in cart</span>

                <div className="img_product">
                    <img src={item.images[0]} alt="" />
                </div>

                <p className="name_product">{item.title}</p>

                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                </div>

                <p className='price'><span>$ {item.price}</span></p>
            </Link>

            <div className="icons">
                <span className='btn_addToCart' onClick={handleAddToCart}><FaCartArrowDown /></span>
                <span className={`${isINFav ? "in_fav" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </div>
    )
}

export default Product
