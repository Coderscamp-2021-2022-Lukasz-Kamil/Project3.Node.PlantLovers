import React from "react";
import { Card, CardProps } from "../Card/Card.style";
import { FlexWrapper } from "../../wrappers/FlexCenter/FlexWrapper.style";
import { Typography, TypographyProps } from "../Typography/Typography.style";

interface CardWithTypographyProps {
  cardProps?: CardProps;
  typographyProps?: TypographyProps;
  textToDisplay?: string;
}

const CardWithTypography = (props: CardWithTypographyProps) => {
  return (
    <FlexWrapper>
      <Card {...props.cardProps}>
        <Typography {...props.typographyProps}>
          {props.textToDisplay}
        </Typography>
      </Card>
    </FlexWrapper>
  );
};

export default CardWithTypography;
