import React from 'react';
import PageTransition from '../../components/PageTransition';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>📬 Contact Us</h2>
            <p>We'd love to hear from you!</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '30px' }}>
            <div style={{ textAlign: 'center', background: '#f9f9f9', padding: '30px', borderRadius: '12px', minWidth: '200px' }}>
              <FaEnvelope style={{ fontSize: '30px', color: 'var(--maincolor)' }} />
              <h4>Email</h4>
              <p>zaid.hatahet.2023@gmail.com</p>
            </div>
            <div style={{ textAlign: 'center', background: '#f9f9f9', padding: '30px', borderRadius: '12px', minWidth: '200px' }}>
              <FaPhone style={{ fontSize: '30px', color: 'var(--maincolor)' }} />
              <h4>Phone</h4>
              <p>+963 940 817 7..</p>
            </div>
            <div style={{ textAlign: 'center', background: '#f9f9f9', padding: '30px', borderRadius: '12px', minWidth: '200px' }}>
              <FaMapMarkerAlt style={{ fontSize: '30px', color: 'var(--maincolor)' }} />
              <h4>Location</h4>
              <p>Damascus, Syria</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;