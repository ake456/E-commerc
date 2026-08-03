import React, { useEffect, useState } from 'react';
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import './productdetails.css';
import { FaShare, FaRegHeart } from "react-icons/fa";
import SlideProduct from '../../components/slideProducts/SlideProduct';
import './productdetails.css';

function ProductDeailsLoading() {
  return (
    <div className='loading_Item'>
      <div className='item_details'>
                <div className="container">
                    <div className="imgs_item skeltion"></div>
                    <div className="details_item">
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                        <h5 className='loading_TextDetailsItem skeltion'></h5>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductDeailsLoading
