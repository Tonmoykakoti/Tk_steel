import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        {/* <p>Your</p> */}
        <h2>your</h2>
        <h1 className="heading">one stop</h1>
        <h2>shop for your house</h2>
        {/* <p>shop for your house</p> */}
        <p className="catalogue">
          this is a catalogue page <br />
          listing products available at our store
        </p>
        <a href="#products" className="btn hero-btn">
          explore products
        </a>
      </div>
    </section>
  );
};

export default Hero;
