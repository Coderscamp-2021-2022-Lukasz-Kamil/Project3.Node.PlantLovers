import React from "react";
import { ImageCard } from "../../ui/ImageCard.style";
import { GridContainer } from "../../wrappers/FlexCenter/GridContainer.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";

const LandingPage = () => {
  return (
    <div>
      <GridContainer></GridContainer>
      <FlexWrapper></FlexWrapper>
      <p>LandingPage</p>
      <ImageCard src="examplePlantPhoto.svg" alt="plantphoto" />
      <p>
        Jeszcze gdy chodziłem do podstawówki, to był tam taki Paweł, i ja
        jechałem na rowerze, i go spotkałem, i potem jeszcze pojechałem do
        biedronki na lody, i po drodze do domu wtedy jeszcze, już do domu
        pojechałem.
      </p>
    </div>
  );
};

export default LandingPage;
