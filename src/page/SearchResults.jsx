import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Product from "../components/SlideProducts/Product";
import Skeleton from '../components/SkeletonLoader/SkeletonLoader';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    setLoading(true);

    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category-products">
        {loading ? (
          <Skeleton type="products" count={6} key={query} />
        ) : results.length > 0 ? (
          <>
            <div className="container">
              <div className="top-slide">
                <h2>Results for : {query}</h2>
              </div>
            </div>
            <div className="products">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </>
        ) : (
          <p className="no-results">No products found for "{query}"</p>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResults;