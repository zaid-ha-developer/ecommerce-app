import { Routes, Route } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/productDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollToTop";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import Favorites from "./page/Favorites/Favorites";

import About from "./page/Navlinks/About";
import Accessories from "./page/Navlinks/Accessories";
import Blog from "./page/Navlinks/Blog";
import Contact from "./page/Navlinks/Contact";

function App() {
  return (
    <PageTransition>
      <>
        <header className="header">
          <TopHeader />
          <BtmHeader />
        </header>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#e9c9c9",
              borderRadius: "8px",
              padding: "14px",
            },
          }}
        />

        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </AnimatePresence>
      </>
    </PageTransition>
  );
}

export default App;
