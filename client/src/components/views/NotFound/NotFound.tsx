import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  background-image: url("tramplep.jpeg");
  background-size: cover;
  height: 100vh;
  background-position: 60% 60%;
  filter: brightness(0.4);
`;

const NotFoundPage = () => {
  return <NotFoundContainer />;
};

export default NotFoundPage;
