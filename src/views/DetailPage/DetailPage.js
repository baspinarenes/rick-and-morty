import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DetailContent from "../../components/DetailContent/DetailContent";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import getAPI from "../../utils/API";

function DetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const path = /\/[a-zA-Z-]+\/(\w+)\/*.*/.exec(window.location.pathname)[1];

  useEffect(async () => {
    const fetchedItem = await getAPI[path]({
      id,
    });
    setItem(fetchedItem.data);
  }, []);

  return (
    !!item && (
      <main id="detail-main" className="py-10">
        <DetailHeader
          image={item?.image || "../assets/placeholder.png"}
          name={item.name}
        />
        <DetailContent item={item} />
      </main>
    )
  );
}

export default DetailPage;
