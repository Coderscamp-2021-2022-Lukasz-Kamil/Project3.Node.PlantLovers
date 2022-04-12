import React from "react";
import { GridContainer } from "../../wrappers/FlexCenter/GridContainer.style";
// import useFetchData from "../../../hooks/UseFetch";
import CardWithTypography from "../../ui/CardTypography/CardTypography";
import { Color } from "../../ui/Card/Card.style";
const LandingPage = () => {
  // const { response, error } = useFetchData({
  //   url: "/offers",
  //   headers: {
  //     accept: "*/*",
  //   },
  // });

  // const offers = response;
  // console.log(offers);

  const example = {
    color: Color.HIGHLIGHTED,
    width: 30,
    height: 50,
    borderRadius: 0,
    boxShadow: true,
  };

  return (
    <div>
      <GridContainer></GridContainer>
      <CardWithTypography cardProps={example} />
      <p>LandingPage</p>
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
