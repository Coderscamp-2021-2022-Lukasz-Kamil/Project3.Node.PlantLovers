import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { Input } from "../../ui/Input/Input.style";
import { Textarea } from "../../ui/Textarea/Textarea.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { ReactComponent as Arrow } from "../../../assets/DownVector.svg";
import { CategoryList, HeightList } from "../../ui/Dropdown/DropdownLists";
import { ButtonWithIcon } from "../../ui/ButtonWithIcon/ButtonWithIcon";
import AddVector from "../../../assets/AddVector.svg";
import { Button } from "../../ui/Button/Button.style";
import { OfferPhotos } from "./OfferPhotos";

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
          <Dropdown title="Category" ico={<Arrow />} list={CategoryList} />
          <Dropdown title="Height" ico={<Arrow />} list={HeightList} />
          <AddOfferInput placeholder="Price" width="100%" fontSizeMobile="md" />
          <AddOfferInput
            placeholder="For exchange (input)"
            width="100%"
            color="secondary"
            fontSizeMobile="md"
          />
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
