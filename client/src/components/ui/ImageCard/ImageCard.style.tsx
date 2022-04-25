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
  width: ${({ imageSize }) => (imageSize?.width ? imageSize?.width : "100%")};
  height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "15vw")};
  object-fit: cover;
  object-position: center;

  @media (max-width: 1000px) {
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "26vh"};
  }

  @media (max-width: 576px) {
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "30vh"};
  }

  @media (max-width: 1000px) and (max-height: 450px) {
    height: ${({ mobileImageSize }) =>
      mobileImageSize?.height ? mobileImageSize.height : "50vh"};
  }
`;
