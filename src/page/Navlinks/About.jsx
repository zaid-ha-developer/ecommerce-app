import React from 'react';
import PageTransition from '../../components/PageTransition';

function About() {
  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>✨ About Us</h2>
            <p>Learn more about our store and mission.</p>
          </div>
          <div className="about-content" style={{ textAlign: 'center', maxWidth: '700px', margin: '40px auto' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
              We are passionate about providing the best products to our customers.
              Our mission is to deliver quality and value with every purchase.
              We believe in building long-term relationships with our community.
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              flexWrap: 'wrap', // ★ السطر السحري: يجبر الأعمدة على النزول للأسفل إذا ضاقت الشاشة
              gap: '20px', // ★ قللنا المسافة لتصبح مناسبة للجوال
              marginTop: '40px' 
            }}>
              <div style={{ minWidth: '120px', marginBottom: '15px' }}>
                <h3 style={{ color: 'var(--maincolor)', fontSize: '32px' }}>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div style={{ minWidth: '120px', marginBottom: '15px' }}>
                <h3 style={{ color: 'var(--maincolor)', fontSize: '32px' }}>1000+</h3>
                <p>Products</p>
              </div>
              <div style={{ minWidth: '120px', marginBottom: '15px' }}>
                <h3 style={{ color: 'var(--maincolor)', fontSize: '32px' }}>4.9⭐</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;