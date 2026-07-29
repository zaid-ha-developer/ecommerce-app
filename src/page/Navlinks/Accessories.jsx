import React from 'react';
import PageTransition from '../../components/PageTransition';
import { FaHeadphones, FaBolt, FaPlug, FaMobileAlt, FaShieldAlt, FaBatteryFull } from 'react-icons/fa';

function Accessories() {
  const accessories = [
    { name: "Wireless Headphones", icon: <FaHeadphones />, description: "High-quality sound with noise cancellation" },
    { name: "Fast Chargers", icon: <FaBolt />, description: "Charge your devices in minutes" },
    { name: "USB Cables", icon: <FaPlug />, description: "Durable and fast data transfer cables" },
    { name: "Phone Cases", icon: <FaMobileAlt />, description: "Protective cases for all phone models" },
    { name: "Screen Protectors", icon: <FaShieldAlt />, description: "Keep your screen safe from scratches" },
    { name: "Power Banks", icon: <FaBatteryFull />, description: "Portable charging on the go" }
  ];

  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>🎧 Accessories</h2>
            <p>Discover our collection of premium accessories</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {accessories.map((item, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '25px 20px',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #eee',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '40px', color: 'var(--maincolor)', marginBottom: '10px' }}>
                  {item.icon}
                </div>
                <h4 style={{ marginBottom: '6px', color: 'var(--color_heading)' }}>{item.name}</h4>
                <p style={{ fontSize: '13px', color: '#777' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Accessories;