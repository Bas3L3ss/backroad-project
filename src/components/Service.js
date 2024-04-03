import React from "react";
import { services } from "../data";

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((article) => {
        const { id, icon, title, text } = article;
        return (
          <article key={id} className="service">
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Service;
