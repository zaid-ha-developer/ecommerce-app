import React from 'react';
import './SkeletonLoader.css';

function Skeleton({ type = 'products', count = 6 }) {
  // عرض Skeleton للمنتجات
  const renderProductsSkeleton = () => {
    return Array(count).fill(0).map((_, i) => (
      <div key={i} className="skeleton-card">
        <div className="skeleton-img"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    ));
  };

  // عرض Skeleton لتفاصيل المنتج
  const renderDetailsSkeleton = () => {
    return (
      <div className="skeleton-details">
        <div className="skeleton-img big"></div>
        <div className="skeleton-info">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-text"></div>
        </div>
      </div>
    );
  };

  // عرض Skeleton للقسم (Category)
  const renderCategorySkeleton = () => {
    return (
      <div className="skeleton-category">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-grid">
          {Array(count).fill(0).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-img"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // اختيار النوع
  if (type === 'products') {
    return <div className="skeleton-container products">{renderProductsSkeleton()}</div>;
  }

  if (type === 'details') {
    return <div className="skeleton-container details">{renderDetailsSkeleton()}</div>;
  }

  if (type === 'category') {
    return <div className="skeleton-container category">{renderCategorySkeleton()}</div>;
  }

  return null;
}

export default Skeleton;