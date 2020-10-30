import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import userData from './user-content.json';

const About = () => (
    <div className="about">
        <Header />
        <h1>{userData.title}</h1>
        <p>{userData.body}</p> 
        <Footer />
    </div>
)

export default About;
