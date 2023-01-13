import React from 'react';
import './Home.css';
import guilherme from '../../../../assets/profile-picture.png';
import Footer from '../../../global/components/footer/footer';

function Home() {
  return (
    <main className="main-home">
      <section className="figure-container">
        <figure data-testid="profile-picture-container" id="profile-picture-container" className="profile-picture-container">
          <img src={guilherme} alt="guilherme profile" className="profile-picture" />
          <div id="fade-effect-for-profile-picture" className="fade-effect" />
        </figure>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
