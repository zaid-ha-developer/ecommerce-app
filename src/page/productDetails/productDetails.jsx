import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import SlideProduct from "../../components/SlideProducts/SlideProduct";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";
import Skeleton from '../../components/SkeletonLoader/SkeletonLoader';


function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);


  if (loading) {
    return <Skeleton type="details" />;
  }
  if (!product) return <p>product Not Found </p>;

  return (
    <PageTransition key={id}>
      <div>
      <div className="item-details">
        <div className="container">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </div>
      </div> 

      {loadingRelatedProducts ? (
        <p>Loading related products...</p>
      ) : (
        <SlideProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace(/-/g, " ")}
        />
      )}
    </div>
    </PageTransition>
  );
}

export default ProductDetails;