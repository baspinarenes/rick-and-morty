import React from "react";
import "./DetailHeader.scss";

function DetailHeader({ image, name }) {
  return (
    <section id="detail-header" className="border-b-2 pb-10 px-20">
      <img src={image} alt="" className="mb-5" />
      <h2>{name}</h2>
    </section>
  );
}

export default DetailHeader;
