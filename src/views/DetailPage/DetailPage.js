import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DetailContent from "../../components/DetailContent/DetailContent";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import { getAPI } from "../../utils/API";

function DetailPage({ path }) {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(async () => {
    const fetchedItem = await getAPI[path]({ id });
    setItem(fetchedItem.data);
  }, []);
  return (
    <main id="detail-main" className="py-10">
      <DetailHeader
        image={item?.image || "/assets/placeholder-img.jpg"}
        name={item.name}
      />
      <DetailContent item={item} />
    </main>
  );
}

export default DetailPage;
