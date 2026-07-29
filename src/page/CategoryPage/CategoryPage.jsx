import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/SlideProducts/Product';
import PageTransition from '../../components/PageTransition';
import './CategoryPage.css';
import Skeleton from '../../components/SkeletonLoader/SkeletonLoader';

function CategoryPage() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [categoryProduct, setCategoryProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [category]);

  console.log(categoryProduct);

  if (loading) {
    return (
      <div className="category-products">
      <div className="container">
        <Skeleton type="category" count={6} />
      </div>
    </div>
    );
  }

  return (
    <PageTransition key={category}>  
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>{category} : {categoryProduct.length}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, laboriosam.</p>
          </div>

          <div className="products">
            {categoryProduct.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default CategoryPage;