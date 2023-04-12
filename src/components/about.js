import React from "react";
// import aboutImg from "../images/about.jpeg";
import about from "../images/tk.jpg";
import Title from "./title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title={"About"} subTitle={"us"} />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p className="aboutInfo">
            Established in 2003, we deal in all kinds of items related to home,
            served over thousands of happy customers. We specialise mainly in
            day to day constructional activities
          </p>
          <p className="aboutInfo">
            Plumbing,Electrical,Fabrications,Paints,Safety Equipments,Hand
            tools,Door locks & handles
            <br />
            <span>you name it, you get it!</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
