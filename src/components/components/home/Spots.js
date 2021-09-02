import React from "react";

import map from "../../../img/general/map.png";

export default function Spots() {
  return (
    <section id="spot" className="bg-gray-100 pb-10">
      <div className="container mx-auto text-center">
        <h3 className="font-bold text-3xl pt-20 mb-1.5 w-1/3 mx-auto mb-5">
          Visit Our Store in the Spot on the Map Below
        </h3>
        <p className="w-2/5 mx-auto mb-40">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <img className="mx-auto" src={map} alt="Spot Area Coffee Shop" />
      </div>
    </section>
  );
}
