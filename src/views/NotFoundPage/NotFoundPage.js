import React from "react";
import "./NotFoundPage.scss";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
  const history = useHistory();

  return (
    <main id="not-found-main" className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="mb-10">404</h2>
        <p className="text-center text-2xl">
          You are lost in the world of Rick and Morty!
          <br />
          <button type="button" onClick={() => history.goBack()}>
            Return to the familiar place.
          </button>
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;
