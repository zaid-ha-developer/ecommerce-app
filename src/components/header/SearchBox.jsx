import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link, useLocation } from "react-router-dom"; 
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }

    const debounce = setTimeout(() => {
      const fetchSuggestions = async () => {
        try {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${searchTerm}`
          );
          const data = await res.json();
          setSuggestions(data.products ? data.products.slice(0, 5) : []);
        } catch (error) {
          console.error("Search Error:", error);
          setSuggestions([]);
        }
      };
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);
useEffect(()=> {
  setSuggestions([]);
}, [location])
  return (
    <div className="searchBox-container">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          name="search"
          placeholder="Search for Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.images[0]} alt={item.title} />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;