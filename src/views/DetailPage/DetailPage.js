import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DetailContent from "../../components/DetailContent/DetailContent";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import getAPI from "../../utils/API";

function DetailPage({ pathName }) {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const path =
    pathName || /\/[a-zA-Z-]+\/(\w+)\/*.*/.exec(window.location.pathname)[1];

  useEffect(async () => {
    const fetchedItem = await getAPI[path]({
      id,
    });

    setItem(fetchedItem.data);
  }, []);

  let image = "";

  if (Object.keys(item).length !== 0) {
    if (item.image) {
      image = item.image;
    } else {
      image = "../assets/placeholder.png";
    }
  }

  return (
    !!item && (
      <main id="detail-main" className="py-10 desktop:py-0">
        <DetailHeader image={image} name={item.name} />
        <DetailContent item={item} pathName={pathName} />
      </main>
    )
  );
}

export default DetailPage;
