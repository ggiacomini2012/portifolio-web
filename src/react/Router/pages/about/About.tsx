import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
// import globalString from '../../constants/strings';
// import s from './constants/strings';

function About() {
  const goTo = useNavigate();
  // console.log('About re-rendered!');
  return (
    <div className="about-page">
      Hello I am the about page!
      <button type="button" onClick={() => goTo('/redux-playground')}>
        Go to redux playground...
      </button>
      <button type="button" onClick={() => goTo('/')}>
        Go to home...
      </button>
    </div>
  );
}

export default About;
