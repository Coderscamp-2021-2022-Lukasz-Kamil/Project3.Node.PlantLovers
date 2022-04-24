import styled from "styled-components";

interface SizeOfImageCard {
  alt: string;
  src: string | object;
  imageSize?: {
    width: string;
    height: string;
  };
  mobileImageSize?: {
    width: string;
    height: string;
  };
}

export const ImageCard = styled.img<SizeOfImageCard>`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  width: ${({ imageSize }) =>
    imageSize?.width ? `${imageSize?.width}%` : "12vw"};
  height: ${({ imageSize }) =>
    imageSize?.height ? imageSize.height : "15vw"}%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 576px) {
    width: ${({ mobileImageSize }) =>
      mobileImageSize?.width ? mobileImageSize.width : "35vw"};
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "25vh"};
  }
`;
