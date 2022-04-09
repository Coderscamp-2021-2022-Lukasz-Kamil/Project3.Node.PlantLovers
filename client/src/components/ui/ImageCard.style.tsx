import styled from "styled-components";

interface SizeOfImageCard {
  img: string;
  imageSize?: {
    width: string;
    height: string;
  };
  mobileImageSize?: {
    width: string;
    height: string;
  };
}

export const ImageCard = styled.div<SizeOfImageCard>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "12vw")};
  height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "15vw")};
  background-color: aliceblue;
`;
