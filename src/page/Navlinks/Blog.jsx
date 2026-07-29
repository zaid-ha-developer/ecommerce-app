import React from 'react';
import PageTransition from '../../components/PageTransition';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "📱 Top 5 Smartphones of 2026",
      excerpt: "Discover the latest smartphones that offer the best performance and innovative features this year.",
      date: "July 29, 2026",
      author: "Zaid Hatahet",
      category: "Technology"
    },
    {
      id: 2,
      title: "💻 How to Choose the Right Laptop for Your Needs",
      excerpt: "A complete guide to choosing the perfect laptop based on your daily use and budget.",
      date: "July 25, 2026",
      author: "Zaid Hatahet",
      category: "Electronics"
    },
    {
      id: 3,
      title: "👔 Latest Fashion Trends for Men & Women",
      excerpt: "Discover the top fashion trends this season and pick your perfect look.",
      date: "July 20, 2026",
      author: "Zaid Hatahet",
      category: "Fashion"
    },
    {
      id: 4,
      title: "🧴 5-Step Skincare Routine for Healthy Skin",
      excerpt: "Simple and effective steps to get glowing, healthy skin using natural products.",
      date: "July 15, 2026",
      author: "Zaid Hatahet",
      category: "Beauty"
    },
    {
      id: 5,
      title: "🛒 Beginner's Guide to Buying Electronics",
      excerpt: "Essential tips for first-time electronics buyers to avoid mistakes and get the best deals.",
      date: "July 10, 2026",
      author: "Zaid Hatahet",
      category: "Tips"
    },
    {
      id: 6,
      title: "🌍 How Technology is Changing Our Daily Lives",
      excerpt: "A look at the impact of technology on our daily lives, pros and cons.",
      date: "July 5, 2026",
      author: "Zaid Hatahet",
      category: "Tech"
    }
  ];

  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>📝 Blog</h2>
            <p>Latest articles and tips from our team</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #eee',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  display: 'inline-block',
                  background: 'var(--maincolor)',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  marginBottom: '12px'
                }}>
                  {post.category}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  color: 'var(--color_heading)',
                  marginBottom: '10px'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  fontSize: '13px',
                  color: '#999',
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '12px'
                }}>
                  <span><FaCalendarAlt style={{ marginRight: '5px' }} />{post.date}</span>
                  <span><FaUser style={{ marginRight: '5px' }} />{post.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;