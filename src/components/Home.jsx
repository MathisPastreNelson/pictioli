import React from "react";
import Image1 from "../assets/pizzas/00000-3994831826.png";
import Image2 from "../assets/pizzas/00001-1559462799.png";
import Image3 from "../assets/pizzas/00002-1709598475.png";
import Image4 from "../assets/pizzas/00003-3202827056.png";
import Image5 from "../assets/pizzas/00004-4111183921.png";
import Image6 from "../assets/pizzas/00005-1876059330.png";

export default function Home() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const names = [
    "Chicken",
    "Cheesy",
    "Merguezou",
    "Fruited",
    "Mushlove",
    "Chorizo",
  ];

  return (
    <div className="home">
      <div className="home_container">
        <div className="pizza-container">
          {images.map((image, index) => (
            <div className="pizza_box" key={index}>
              <img className="pizzaImage" src={image} alt={`Image ${index}`} />
              <p className="pizzaTitle">{names[index]}</p> {/* Ajout du nom de la pizza */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
