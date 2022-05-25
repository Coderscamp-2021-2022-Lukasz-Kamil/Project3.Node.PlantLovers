/*global browser*/
import React from "react";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import Arrow from "../../../assets/DownVector.svg";
import { Button } from "../../ui/Button/Button.style";
import { Typography } from "../../ui/Typography/Typography.style";
import {
  AddOfferFlexWrapper,
  AddOfferTitle,
  AddOfferDataFlexWrapper,
  AddOfferInput,
  AddOfferTextarea,
  AddOfferLeftColumnFlexWrapper,
  ForExchangeContainer,
  Checkbox,
} from "./AddOffer.styled";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import {
  getCategories,
  getHeights,
  handleAddOffer,
} from "../../../shared/API/api";
import Category from "../../../shared/intefaces/category.interface";
import Height from "../../../shared/intefaces/height.interface";
import { Item } from "../../ui/Dropdown/Dropdown.intefrace";
import Photo from "../../../shared/intefaces/photos.interface";

const AddOfferPage = () => {
  const [categories, setcategories] = useState<Category[]>([]);
  const [heights, setHeights] = useState<Height[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [categoryItems, setCategoryItems] = useState<Item[]>([]);

  const [heightId, setHeightId] = useState("");
  const [heightsItems, setHeightsItems] = useState<Item[]>([]);
  const [price, setPrice] = useState("");
  const [forExchange, setForExchange] = useState(true);
  const [photo, setPhoto] = useState<Photo>();

  const [token] = useCookies(["token"]);
  const [userId] = useCookies(["user-id"]);

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/user/your-offers");
  };

  const titleHandler = (event: any) => {
    setTitle(event.target.value);
  };

  const descriptionHandler = (event: any) => {
    setDescription(event.target.value);
  };

  const cityHandler = (event: any) => {
    setCity(event.target.value);
  };

  const phoneNumberHandler = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const categoryHandler = (chosenOption: Item) => {
    setCategoryId(chosenOption.id);
  };

  const heightHandler = (chosenOption: Item) => {
    setHeightId(chosenOption.id);
  };

  const priceHandler = (event: any) => {
    const onlyDigits = event.target.value.replace(/\D/g, "");
    setPrice(onlyDigits);
  };

  const onExchangeHandler = () => {
    setForExchange(!forExchange);
  };

  const photoLinkHandler = (event: any) => {
    setPhoto({ url: event.target.value });
  };

  const findCategory = (categoryId: string) => {
    return categories.filter((c) => c._id === categoryId)[0];
  };

  const findHeight = (heightId: string) => {
    return heights.filter((c) => c._id === heightId)[0];
  };

  useEffect(() => {
    const fetchHeights = async () => {
      const allHeights = await getHeights();
      if (allHeights) {
        setHeights(allHeights);
      }
    };
    fetchHeights();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getCategories();
      if (allCategories) {
        setcategories(allCategories);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories) {
      const items = categories.map((c) => {
        return { id: c._id, name: c.name };
      });
      console.log(items);
      setCategoryItems(items);
    }
  }, [categories]);

  useEffect(() => {
    if (heights) {
      const items = heights.map((c) => {
        return { id: c._id, name: c.range };
      });
      setHeightsItems(items);
    }
  }, [heights]);

  return (
    <AddOfferFlexWrapper direction="column">
      <AddOfferTitle>Add Offer</AddOfferTitle>
      <AddOfferDataFlexWrapper>
        <AddOfferLeftColumnFlexWrapper direction="column">
          <AddOfferInput
            placeholder="Title"
            type="text"
            id="title"
            width="100%"
            fontSizeMobile="md"
            onChange={titleHandler}
            value={title}
          />
          <AddOfferTextarea
            placeholder="Description"
            id="description"
            onChange={descriptionHandler}
            value={description}
          />
          <AddOfferInput
            placeholder="City"
            type="text"
            id="city"
            width="100%"
            fontSizeMobile="md"
            onChange={cityHandler}
            value={city}
          />
          <AddOfferInput
            placeholder="Phone Number"
            type="tel"
            id="phone"
            width="100%"
            fontSizeMobile="md"
            onChange={phoneNumberHandler}
            value={phoneNumber}
          />
          <Dropdown
            title="Category"
            imageSrc={Arrow}
            imageWidth={15}
            imageHeigth={15}
            imageMobileWidth={15}
            imageMobileHeigth={15}
            imageMarginRight="0"
            list={categoryItems}
            listMarginTop="43px"
            listMobileMargin="34px 0 0"
            iconPosition="absolute"
            onOptionChosen={categoryHandler}
          />
          <Dropdown
            title="Height"
            imageSrc={Arrow}
            imageWidth={15}
            imageHeigth={15}
            imageMobileWidth={15}
            imageMobileHeigth={15}
            imageMarginRight="0"
            list={heightsItems}
            listMarginTop="44px"
            listMobileMargin="34px 0 0"
            iconPosition="absolute"
            onOptionChosen={heightHandler}
          />
          <AddOfferInput
            placeholder="Price"
            type="number"
            id="price"
            inputMode="decimal"
            width="100%"
            fontSizeMobile="md"
            onChange={priceHandler}
            value={price}
          />
          <ForExchangeContainer>
            <Typography fontSize="mds" fontSizeMobile="md">
              For Exchange?
            </Typography>
            <Checkbox
              type="checkbox"
              id="checkbox"
              onChange={onExchangeHandler}
            />
          </ForExchangeContainer>
          <AddOfferInput
            placeholder="Picture's link"
            type="text"
            id="picture"
            onChange={photoLinkHandler}
            value={photo?.url}
          />
          <Button
            onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
              await handleAddOffer({
                title,
                description,
                city,
                phoneNumber,
                category: findCategory(categoryId),
                height: findHeight(heightId),
                price,
                forExchange,
                photos: photo ? [photo] : [],
                userId: userId["user-id"],
                token,
              });

              setTimeout(navigation, 1000);
            }}
          >
            Save Changes
          </Button>
        </AddOfferLeftColumnFlexWrapper>
      </AddOfferDataFlexWrapper>
    </AddOfferFlexWrapper>
  );
};

export default AddOfferPage;
