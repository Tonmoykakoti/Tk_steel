import React from "react";
import Title from "./title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="products">
      <Title title="our" subTitle="products" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, title, image, info, duration, cost } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                {/* <p className="tour-date">{date}</p> */}
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p></p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
