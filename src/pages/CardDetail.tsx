import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
    "description": "Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and solving complex technical challenges.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "isOnline": true,
    "experience": "5+ years",
    "skills": ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Express.js", "Docker", "GraphQL"],
    "languages": ["Hindi (Native)", "English (Fluent)", "Marathi (Conversational)"],
    "education": "B.Tech Computer Science from IIT Mumbai",
    "projects": ["E-commerce Platform", "Real-time Chat Application", "Task Management System", "API Gateway Service"],
    "rating": 4.9,
    "completedProjects": "127+",
    "responseTime": "Within 2 hours",
    "availability": "40 hours/week",
    "portfolio": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop"
    ]
  },
  {
    "id": 2,
    "title": "Priya Patel",
    "price": "₹1,800/hour",
    "username": "@priya_design",
    "location": "Bangalore, India",
    "description": "UI/UX Designer specializing in modern web interfaces and mobile app design. Creating beautiful, user-centered designs that enhance user experience and drive business results.",
    "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "isOnline": false,
    "experience": "7+ years",
    "skills": ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Principle", "InVision", "Framer"],
    "languages": ["Gujarati (Native)", "Hindi (Fluent)", "English (Fluent)"],
    "education": "Master's in Design from NID Ahmedabad",
    "projects": ["Banking Mobile App", "E-learning Platform", "Healthcare Dashboard", "Travel Booking Website"],
    "rating": 4.8,
    "completedProjects": "89+",
    "responseTime": "Within 4 hours",
    "availability": "30 hours/week",
    "portfolio": [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
    ]
  },
  {
    "id": 3,
    "title": "Rahul Singh",
    "price": "₹3,000/hour",
    "username": "@rahul_data",
    "location": "Delhi, India",
    "description": "Data scientist and machine learning engineer with expertise in Python, TensorFlow, and statistical analysis. Specializing in cloud architecture, AI solutions, and data-driven insights.",
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "isOnline": true,
    "experience": "6+ years",
    "skills": ["Python", "Machine Learning", "TensorFlow", "AWS", "SQL", "R", "Data Analysis", "Deep Learning"],
    "languages": ["Hindi (Native)", "English (Fluent)", "Punjabi (Conversational)"],
    "education": "M.Tech Data Science from IIT Delhi",
    "projects": ["Customer Analytics Platform", "Fraud Detection System", "Recommendation Engine", "Predictive Analytics"],
    "rating": 4.7,
    "completedProjects": "156+",
    "responseTime": "Within 1 hour",
    "availability": "35 hours/week",
    "portfolio": [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    ]
  }
];

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const card = data.find((c: CardType) => c.id === Number(id));

  if (!card) return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      color: 'red'
    }}>
      User profile not found.
    </div>
  );

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Basic Profile Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <img 
          src={card.image} 
          alt={card.title} 
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '15px',
            display: 'block',
            margin: '0 auto 15px auto'
          }}
        />
        <h1 style={{
          margin: '10px 0',
          fontSize: '2rem',
          color: '#333'
        }}>{card.title}</h1>
        <p style={{
          margin: '5px 0',
          fontSize: '1.1rem',
          color: '#666'
        }}>{card.username}</p>
        <p style={{
          margin: '5px 0',
          fontSize: '1rem',
          color: '#666'
        }}>📍 {card.location}</p>
        <p style={{
          margin: '10px 0',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: '#3498db'
        }}>{card.price}</p>
      </div>

      {/* Introduction */}
      <div style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h2 style={{
          margin: '0 0 15px 0',
          fontSize: '1.5rem',
          color: '#333',
          borderBottom: '2px solid #3498db',
          paddingBottom: '8px'
        }}>Introduction</h2>
        <p style={{
          margin: 0,
          lineHeight: '1.6',
          color: '#555',
          fontSize: '1rem'
        }}>{card.description}</p>
      </div>

      {/* Skills */}
      <div style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h2 style={{
          margin: '0 0 15px 0',
          fontSize: '1.5rem',
          color: '#333',
          borderBottom: '2px solid #3498db',
          paddingBottom: '8px'
        }}>Skills</h2>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8'
        }}>
          {card.skills.map((skill, index) => (
            <li key={index} style={{
              fontSize: '1rem',
              color: '#555',
              marginBottom: '5px'
            }}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h2 style={{
          margin: '0 0 15px 0',
          fontSize: '1.5rem',
          color: '#333',
          borderBottom: '2px solid #3498db',
          paddingBottom: '8px'
        }}>Projects</h2>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8'
        }}>
          {card.projects.map((project, index) => (
            <li key={index} style={{
              fontSize: '1rem',
              color: '#555',
              marginBottom: '5px'
            }}>{project}</li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h2 style={{
          margin: '0 0 15px 0',
          fontSize: '1.5rem',
          color: '#333',
          borderBottom: '2px solid #3498db',
          paddingBottom: '8px'
        }}>Education</h2>
        <p style={{
          margin: 0,
          lineHeight: '1.6',
          color: '#555',
          fontSize: '1rem'
        }}>{card.education}</p>
      </div>

      {/* Back Button */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '10px 20px',
            border: '2px solid #3498db',
            borderRadius: '5px',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}
        >
          ← Back to Profiles
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;