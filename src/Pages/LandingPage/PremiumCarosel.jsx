import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "../Product/ProductCard.jsx";
import "./PremiumCarosel.css";

export function PremiumCarousel({ products }) {
  const [index, setIndex] = useState(0);
  const itemsPerView = 3;

  const next = () => {
    setIndex((prev) => (prev + itemsPerView) % products.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev - itemsPerView < 0
        ? products.length - itemsPerView
        : prev - itemsPerView
    );
  };

  const displayedProducts = products.slice(index, index + itemsPerView);

  return (
    <div className="carousel-container">
      <button className="nav-btn prev-btn" onClick={prev}>
        ‹
      </button>

      <div className="carousel-viewport">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="carousel-track"
          >
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="nav-btn next-btn" onClick={next}>
        ›
      </button>
    </div>
  );
}
