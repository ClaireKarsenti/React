import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
        <div>
          {/* {...tour} spreadoperator to get all the properties of the tour */}
          {tours.map((tour) => {
            return (
              <Tour keu={tour.id} {...tour} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
