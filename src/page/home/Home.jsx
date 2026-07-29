import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/header/HeroSlider";

import "./home.css";
import SlideProduct from "../../components/SlideProducts/SlideProduct";

const categories = [
  // 📱 الإلكترونيات (الأكثر طلباً)
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",

  // 👕 الملابس
  "mens-shirts",
  "mens-shoes",
  "womens-dresses",
  "womens-shoes",
  "tops",

  // 💎 الإكسسوارات
  "mens-watches",
  "womens-watches",
  "sunglasses",
  "womens-jewellery",

  // 🧴 الجمال والعناية
  "beauty",
  "skin-care",
  "fragrances",

  // 🏠 المنزل والمطبخ
  "furniture",
  "home-decoration",
  "kitchen-accessories",
  "groceries",

  // 🏍️ الرياضة والسيارات
  "sports-accessories",
  "motorcycle",
  "vehicle",

  // 👜 أخرى
  "womens-bags",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <HeroSlider />

      {loading ? (
        <div className="skeleton-container">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="skeleton-card">
              <div className="skeleton-img"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          ))}
        </div>
      ) : (
        categories.map((category) => (
          <SlideProduct
            key={category}
            data={products[category]}
            title={category.replace(/-/g, " ")}
          />
        ))
      )}
    </div>
  );
}

export default Home;
