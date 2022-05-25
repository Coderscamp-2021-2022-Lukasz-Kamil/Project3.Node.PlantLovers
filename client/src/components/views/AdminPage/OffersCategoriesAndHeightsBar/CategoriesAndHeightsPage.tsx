import React, { useEffect } from "react";
import { HeightsTable } from "./HeightsTable";
import { CategoriesTable } from "./CategoriesTable";
import {
  FlexLayout,
  TableInputWrapper,
  InputWrapper,
} from "./CategoriesAndHeightsPage.styled";
import { Input } from "../../../ui/Input/Input.style";
import { Button } from "../../../ui/Button/Button.style";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Height from "../../../../shared/intefaces/height.interface";
import { getHeights, handleCreateHeight } from "../../../../shared/API/api";
import Category from "../../../../shared/intefaces/category.interface";
import { handleCreateCategory } from "../../../../shared/API/api";
import { getCategories } from "../../../../shared/API/api";

const CategoriesAndHeightsPage = () => {
  const [heights, setHeights] = useState<Height[]>([]);
  const [newHeight, setNewHeight] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const [token] = useCookies(["token"]);

  const handleAddHeight = (event: any) => {
    event.preventDefault();
    setNewHeight(event.target.value);
  };

  const handleAddCategory = (event: any) => {
    event.preventDefault();
    setNewCategory(event.target.value);
  };

  useEffect(() => {
    const fetchAllHeights = async () => {
      const allHeights = await getHeights();
      if (allHeights) {
        setHeights(allHeights);
      }
    };
    fetchAllHeights();
  }, []);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await getCategories();
      if (allCategories) {
        setCategories(allCategories);
      }
    };
    fetchAllCategories();
  }, []);

  return (
    <>
      <FlexLayout>
        <TableInputWrapper>
          <HeightsTable heights={heights} setHeights={setHeights} />
          <InputWrapper>
            <Input
              value={newHeight}
              width="12vw"
              height="100%"
              onChange={handleAddHeight}
            />
            <Button
              width="4rem"
              height="100%"
              fontSizeDesktop="sm"
              type="submit"
              onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
                setNewHeight("");
                const heights = await handleCreateHeight(newHeight, token);
                if (heights) {
                  setHeights(heights);
                }
                console.log(heights);
              }}
            >
              Add
            </Button>
          </InputWrapper>
        </TableInputWrapper>
        <TableInputWrapper>
          <CategoriesTable
            categories={categories}
            setCategories={setCategories}
          />
          <InputWrapper>
            <Input
              width="12vw"
              height="100%"
              value={newCategory}
              onChange={handleAddCategory}
            />
            <Button
              width="4rem"
              height="100%"
              fontSizeDesktop="sm"
              type="submit"
              onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
                setNewCategory("");
                const categories = await handleCreateCategory(
                  newCategory,
                  token
                );
                if (categories) {
                  setCategories(categories);
                }
              }}
            >
              Add
            </Button>
          </InputWrapper>
        </TableInputWrapper>
      </FlexLayout>
    </>
  );
};

export default CategoriesAndHeightsPage;
