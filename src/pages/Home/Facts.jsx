import React from "react";
import { facts } from "../../data";
import "./Facts.scss";
import { PiNeedleFill } from "react-icons/pi";

const Facts = () => {
  return (
    <section className="facts">
      <h1>Plants&Health</h1>
      <div className="facts-container">
        {facts.map((fact) => {
          return (
            <article key={fact.id} className="single-fact">
              <div className="fact-title">
                <h3>
                  {fact.icon}
                  {fact.title}
                </h3>
              </div>
              <p>{fact.text}</p>
              <PiNeedleFill className="needle" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Facts;
