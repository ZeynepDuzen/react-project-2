import { Component } from 'react';
import React from 'react';
import heroImg from '../images/hero-img.png';

class Hero2 extends Component{
    render(){
       
       const name = this.props;
       console.log(name);                      

       return(
         <section className="hero">
           <img src={heroImg} className="hero-img" alt="hero-img" />
           <h1 className="hero-header">Online Experiences</h1>
           <p className="hero-text">Join unique interactive activities led by 
           one-of-a-kind hosts—all without leaving home.</p>
         </section>
       )                       
    }
}

export default Hero2;