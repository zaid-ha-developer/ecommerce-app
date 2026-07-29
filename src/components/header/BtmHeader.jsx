import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'; 
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";


const Navlinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "Accessories", link: "/Accessories" },
  { title: "Blog", link: "/Blog" },
  { title: "Contact", link: "/contact" },
];



function BtmHeader() {

  const location = useLocation()
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(()=> {
    setIsCategoryOpen(false)
  },[location])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json()) 
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav" >
            <div className="category-btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}>              {categories.map((category) => ( 
                <Link to={`category/${category.slug}`} key={category.slug}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-links">
            {Navlinks.map((item) => (
              <li key={item.title} className={location.pathname === item.link ? "active" : ""}>
                <Link to={item.link} key={item.title}>
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icon">
          <Link to="/"> <PiSignInBold /> </Link>
          <Link to="/"> <FaUserPlus /> </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;