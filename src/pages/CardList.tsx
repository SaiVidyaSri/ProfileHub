import React from 'react';
import { Link } from 'react-router-dom';

type CardType = {
  id: number;
  title: string;
  price: string;
  username: string;
  location: string;
  description: string;
  image: string;
  isOnline: boolean;
  experience: string;
  skills: string[];
  languages: string[];
  education: string;
  projects: string[];
  rating: number;
  completedProjects: string;
  responseTime: string;
  availability: string;
  portfolio: string[];
};

const data: CardType[] = [
  {
    "id": 1,
    "title": "Arjun Sharma",
    "price": "₹2,500/hour",
    "username": "@arjun_dev",
    "location": "Mumbai, India",
    "description": "Full-stack developer with 5+ years of experience in React, Node.js, and MongoDB. Passionate about creating scalable web applications.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "isOnline": true,
    "experience": "5+ years",
    "skills": ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript", "Express"],
    "languages": ["Hindi (Native)", "English (Fluent)", "Marathi (Conversational)"],
    "education": "B.Tech Computer Science from IIT Mumbai",
    "projects": ["E-commerce Platform", "Social Media App", "Banking Dashboard"],
    "rating": 4.8,
    "completedProjects": "150+",
    "responseTime": "Within 2 hours",
    "availability": "Full-time",
    "portfolio": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop"
    ]
  },
  {
    "id": 2,
    "title": "Priya Patel",
    "price": "₹1,800/hour",
    "username": "@priya_design",
    "location": "Bangalore, India",
    "description": "Creative UI/UX designer specializing in mobile and web applications. Expert in Figma and Adobe Creative Suite.",
    "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "isOnline": false,
    "experience": "4+ years",
    "skills": ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "User Research", "Prototyping"],
    "languages": ["Gujarati (Native)", "Hindi (Fluent)", "English (Fluent)"],
    "education": "Master's in Design from NID Ahmedabad",
    "projects": ["Mobile Banking App UI", "Healthcare Platform Design", "Food Delivery App"],
    "rating": 4.9,
    "completedProjects": "120+",
    "responseTime": "Within 4 hours",
    "availability": "Part-time",
    "portfolio": [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=200&h=150&fit=crop"
    ]
  },
  {
    "id": 3,
    "title": "Rahul Singh",
    "price": "₹3,000/hour",
    "username": "@rahul_data",
    "location": "Delhi, India",
    "description": "Data scientist and machine learning engineer with expertise in Python, TensorFlow, and statistical analysis.",
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "isOnline": true,
    "experience": "6+ years",
    "skills": ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "SQL", "R"],
    "languages": ["Hindi (Native)", "English (Fluent)", "Punjabi (Conversational)"],
    "education": "M.Tech Data Science from IIT Delhi",
    "projects": ["Customer Analytics Platform", "Fraud Detection System", "Recommendation Engine"],
    "rating": 4.7,
    "completedProjects": "80+",
    "responseTime": "Within 1 hour",
    "availability": "Full-time",
    "portfolio": [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop"
    ]
  }
];

const CardList: React.FC = () => (
  <div className="cards-container" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    {data.map((card: CardType) => (
      <Link to={`/card/${card.id}`} key={card.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card" style={{
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          background: 'white',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          border: '1px solid #e0e0e0'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
        }}>
          <div className="card-header" style={{
            padding: '30px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
          }}>
            <img src={card.image} alt={card.title} style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '15px',
              border: '4px solid white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }} />
            <div className="card-title" style={{
              fontSize: '1.4rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              {card.title}
            </div>
            <div className="card-price" style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#3398db',
              marginBottom: '10px',
              background: 'white',
              padding: '5px 15px',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(51, 152, 219, 0.2)'
            }}>{card.price}</div>
          </div>
        <div className="card-body" style={{
          backgroundColor: '#f4f4f4',
          padding: '25px',
          position: 'relative'
        }}>
          <div className="card-username" style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '10px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '5px' }}>👤</span>
            {card.username}
          </div>
          <div className="card-location" style={{
            fontSize: '0.9rem',
            color: '#888',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '5px' }}>📍</span>
            {card.location}
          </div>
          <div className="card-description" style={{
            fontSize: '0.9rem',
            color: '#555',
            lineHeight: '1.5',
            marginBottom: '20px',
            height: '60px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}>{card.description}</div>
          <div className="btns" style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '18px'
          }}>
            <button className="btn-outline" style={{
              flex: '1',
              padding: '12px 16px',
              border: '2px solid #3398db',
              background: 'white',
              color: '#3398db',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#3398db';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#3398db';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>Contact</button>
            <button className="btn-filled" style={{
              flex: '1',
              padding: '12px 16px',
              border: 'none',
              backgroundColor: '#3398db',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(51, 152, 219, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(51, 152, 219, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#3398db';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(51, 152, 219, 0.3)';
            }}>Hire Me</button>
          </div>
          <div className="card-status" style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#666',
            background: 'white',
            padding: '8px 12px',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
            width: 'fit-content'
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              marginRight: '8px',
              display: 'inline-block',
              backgroundColor: card.isOnline ? '#4CAF50' : '#757575',
              boxShadow: card.isOnline ? '0 0 6px rgba(76, 175, 80, 0.5)' : 'none'
            }}></span>
            {card.isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>
      </Link>
    ))}
  </div>
);

export default CardList;