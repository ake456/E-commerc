import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/slideProducts/Product';
import './CategoryPage.css';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransition';

export default function CategoryPage() {

    const { category } = useParams();

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }, [category]);

    return (
        <PageTransition key={category}>
            <div className="category_products">

                {loading ? <SlideProductLoading key={category} /> :

                    <div className='container'>
                        <div className="top_slide">
                            <h2>{category} : {categoryProducts.limit}</h2>
                            <p>Add bestselling products to weekly line up</p>
                        </div>
                        <div className="products">
                            {categoryProducts.products.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>
                }
            </div>
        </PageTransition>
    );
}
