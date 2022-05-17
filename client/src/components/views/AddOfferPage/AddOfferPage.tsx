import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { Input } from "../../ui/Input/Input.style";
import { Textarea } from "../../ui/Textarea/Textarea.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import Arrow from "../../../assets/DownVector.svg";
import { CategoryList, HeightList } from "../../ui/Dropdown/DropdownLists";
import { ButtonWithIcon } from "../../ui/ButtonWithIcon/ButtonWithIcon";
import AddVector from "../../../assets/AddVector.svg";
import { Button } from "../../ui/Button/Button.style";
import { OfferPhotos } from "./OfferPhotos";
import { Typography } from "../../ui/Typography/Typography.style";

const AddOfferFlexWrapper = styled(FlexWrapper)`
  margin-bottom: 50px;
`;

const AddOfferTitle = styled.h1`
  margin: 20px 0;
`;
const AddOfferDataFlexWrapper = styled(FlexWrapper)`
  margin: 0 10%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const AddOfferLeftColumnFlexWrapper = styled(FlexWrapper)`
  margin-right: 10%;

  @media (max-width: 576px) {
    margin-right: 0;
  }
`;

const AddOfferRightColumnFlexWrapper = styled(FlexWrapper)`
  width: 30vw;

  @media (max-width: 576px) {
    width: 70vw;
  }
`;

const AddOfferTextarea = styled(Textarea)`
  margin-bottom: 0.8em;
`;

export const MainUploadedPhoto = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  margin-bottom: 0.8em;
`;

const AddOfferInput = styled(Input)`
  margin-bottom: 0.8em;
`;

const ForExchangeContainer = styled(FlexWrapper)`
  border-radius: 5px;
  border: 1px solid #000;
  background: #f9f8f8;
  width: 100%;
  height: 45px;

  @media (max-width: 576px) {
    height: 33px;
    margin-bottom: 0.8em;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  accent-color: ${({ theme }) => theme.colors.button.primary};

  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

const AddOfferPage = () => {
  return (
    <AddOfferFlexWrapper direction="column">
      <AddOfferTitle>Add Offer</AddOfferTitle>
      <AddOfferDataFlexWrapper>
        <AddOfferLeftColumnFlexWrapper direction="column">
          <AddOfferInput placeholder="Title" width="100%" fontSizeMobile="md" />
          <AddOfferTextarea placeholder="Description" />
          <AddOfferInput placeholder="City" width="100%" fontSizeMobile="md" />
          <AddOfferInput
            placeholder="Phone Number"
            width="100%"
            fontSizeMobile="md"
          />
          <Dropdown
            title="Category"
            imageSrc={Arrow}
            imageWidth={15}
            imageHeight={15}
            imageMobileWidth={15}
            imageMobileHeigth={15}
            imageMarginRight="0"
            list={CategoryList}
          />
          <Dropdown
            title="Height"
            imageSrc={Arrow}
            imageWidth={15}
            imageHeight={15}
            imageMobileWidth={15}
            imageMobileHeigth={15}
            imageMarginRight="0"
            list={HeightList}
          />
          <AddOfferInput placeholder="Price" width="100%" fontSizeMobile="md" />
          <ForExchangeContainer>
            <Typography fontSize="mds" fontSizeMobile="md">
              For Exchange?
            </Typography>
            <Checkbox type="checkbox" />
          </ForExchangeContainer>
        </AddOfferLeftColumnFlexWrapper>
        <AddOfferRightColumnFlexWrapper direction="column">
          <MainUploadedPhoto></MainUploadedPhoto>
          <OfferPhotos />
          <ButtonWithIcon src={AddVector} content="Add" />
          <Button>Save Changes</Button>
        </AddOfferRightColumnFlexWrapper>
      </AddOfferDataFlexWrapper>
    </AddOfferFlexWrapper>
  );
};

export default AddOfferPage;
