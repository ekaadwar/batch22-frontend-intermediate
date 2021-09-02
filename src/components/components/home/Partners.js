import React from "react";

import logoSportify from "../../../assets/logoSportify.png";
import logoAmazon from "../../../assets/logoAmazon.png";
import logoDiscord from "../../../assets/logoDiscord.png";
import logoNetflix from "../../../assets/logoNetflix.png";
import logoReddit from "../../../assets/logoReddit.png";

const logo = [
  {
    name: "Sportify",
    image: logoSportify,
  },
  {
    name: "Amazon",
    image: logoAmazon,
  },
  {
    name: "Discord",
    image: logoDiscord,
  },
  {
    name: "Netflix",
    image: logoNetflix,
  },
  {
    name: "Reddit",
    image: logoReddit,
  },
];

export default function Partners() {
  return (
    <section id="partner" className="bg-gray-100 pb-10">
      <div className="container mx-auto text-center">
        <h3 className="font-bold text-3xl pt-20 w-1/3 mx-auto mb-16">
          Our Partner
        </h3>
        <div className="flex justify-around space-x-16 flex-wrap">
          {logo.map((value) => {
            return (
              <div className="flex-1">
                <img src={value.image} alt={value.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
