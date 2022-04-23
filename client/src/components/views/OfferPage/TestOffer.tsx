import React from "react";
import { OneOffer } from "./OneOffer";

export const TestOffer = () => {
  const offer = {
    title: "Bonsai",
    price: 30,
    description:
      "Jeszcze gdy chodziłem do podstawówki, to był tam taki Paweł, i ja jechałem na rowerze, i go spotkałem, i potem jeszcze pojechałem do biedronki na lody, i po drodze do domu wtedy jeszcze, już do domu pojechałem.",
    category: "dunno",
    height: "ze 3 metry",
    city: "Żarów",
    email: "we@rgea.pl",
    phoneNumber: "334243556",
  };

  return (
    <div>
      <OneOffer
        title={offer.title}
        price={offer.price}
        key={offer.title}
        description={offer.description}
        category={offer.category}
        height={offer.height}
        city={offer.city}
        email={offer.email}
        phoneNumber={offer.phoneNumber}
      />
    </div>
  );
};
