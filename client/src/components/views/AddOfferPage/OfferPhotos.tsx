import React from "react";
import styled from "styled-components";

interface UploadPhoto {
  src: string;
}

const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const MainUploadedPhoto = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  margin-bottom: 0.8em;
`;

const UploadedPhoto = styled(MainUploadedPhoto)<UploadPhoto>`
  width: 9vw;
  height: 9vh;
  background-image: ${({ src }) => src};

  @media (max-width: 576px) {
    width: 22vw;
  }
`;

export const OfferPhotos = () => {
  const photos = [
    { id: 1, src: "" },
    { id: 2, src: "" },
    { id: 3, src: "" },
  ];
  return (
    <PhotoWrapper>
      {photos.map((photo) => (
        <UploadedPhoto key={photo.id} src={photo.src}></UploadedPhoto>
      ))}
    </PhotoWrapper>
  );
};
