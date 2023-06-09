import React from "react";
import Image1 from "../assets/pizzas/00000-3994831826.png";
import Image2 from "../assets/pizzas/00001-1559462799.png";
import Image3 from "../assets/pizzas/00002-1709598475.png";
import Image4 from "../assets/pizzas/00003-3202827056.png";
import Image5 from "../assets/pizzas/00004-4111183921.png";
import Image6 from "../assets/pizzas/00005-1876059330.png";

export default function Home() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="home">
      <div className="home_container">
        <h2>Choisissez votre pizza à l'avance !</h2>
                <div className="image-container">
          {images.map((image, index) => (
            <img className="image" key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
        <p>Voici la box principale</p>
      </div>
    </div>
  );
}
