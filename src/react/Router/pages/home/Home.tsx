import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import guilherme from '../../../../assets/profile-picture.png';
import globalString from '../../../global/constants/strings/globalStrings';
import Footer from '../../../global/components/footer/footer';

function Home() {
  // const goTo = useNavigate();
  return (
    <main className="main-home">
      {globalString.developerName}
      <section className="figure-container">
        <figure data-testid="profile-picture-container" id="profile-picture-container" className="profile-picture-container">
          <img src={guilherme} alt="guilherme profile" className="profile-picture" />
          <details id="fade-effect-for-profile-picture" className="fade-effect" />
        </figure>
      </section>
      {/* <button type="button" onClick={() => goTo('/redux-playground')}>
        Go to redux playground...
      </button>
      <button type="button" onClick={() => goTo('/about')}>
        Go to about...
      </button> */}
      <Footer />
    </main>
  );
}

export default Home;
