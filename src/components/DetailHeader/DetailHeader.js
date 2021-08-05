import React from "react";
import "./DetailHeader.scss";

function DetailHeader({ image, name }) {
  return (
    <section id="detail-header" className="border-b-2 pb-5 px-20">
      <img src={image} alt="Item" className="border-2 mb-5" />
      <h2>{name}</h2>
    </section>
  );
}

export default DetailHeader;
