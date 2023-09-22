import React from "react";
import { facts } from "../../data";
import "./Facts.scss";

const Facts = () => {
  return (
    <section className="facts">
      <div className="facts-container">
        {facts.map((fact) => {
          return (
            <article key={fact.id}>
              <div className="fact-title">
                <h3>
                  {fact.icon}
                  {fact.title}
                </h3>
              </div>
              <p>{fact.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Facts;
