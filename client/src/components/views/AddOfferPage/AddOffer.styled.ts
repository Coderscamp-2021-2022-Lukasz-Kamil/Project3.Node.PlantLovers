import styled from "styled-components";
import { Textarea } from "../../ui/Textarea/Textarea.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { Input } from "../../ui/Input/Input.style";

export const AddOfferFlexWrapper = styled(FlexWrapper)`
  margin-bottom: 50px;
`;

export const AddOfferTitle = styled.h1`
  margin: 20px 0;
`;
export const AddOfferDataFlexWrapper = styled(FlexWrapper)`
  margin: 0 10%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const AddOfferLeftColumnFlexWrapper = styled(FlexWrapper)`
  margin-right: 10%;

  @media (max-width: 576px) {
    margin-right: 0;
  }
`;

export const AddOfferRightColumnFlexWrapper = styled(FlexWrapper)`
  width: 30vw;

  @media (max-width: 576px) {
    width: 70vw;
  }
`;

export const AddOfferTextarea = styled(Textarea)`
  margin-bottom: 0.8em;
`;

export const MainUploadedPhoto = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  margin-bottom: 0.8em;
`;

export const AddOfferInput = styled(Input)`
  margin-bottom: 0.8em;
`;

export const ForExchangeContainer = styled(FlexWrapper)`
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

export const Checkbox = styled.input`
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
