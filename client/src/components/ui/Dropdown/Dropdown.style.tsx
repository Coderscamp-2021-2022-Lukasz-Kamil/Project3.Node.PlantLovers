import React, { useState } from "react";
import styled from "styled-components";

interface Icon {
    src: string;
    alt: string;
    imageSize?: {
      width: string;
      height: string;
    };
}

const Icon = styled.img<Icon>`
align-self: center;
src: ${({ src }) => src};
alt: ${({ alt }) => alt};
width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "18px")};
height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "18px")};

@media (max-width: 576px) {
    width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "10px")};
    height: ${({ imageSize }) =>
    imageSize?.height ? imageSize.height : "10px"};
} 
`;

const DropDownContainer = styled.div`
    margin-top: ${({theme}) => theme.size.common.marginTop};
    display: flex;
    flex-flow: column;

    @media (max-width: 576px) {
        align-items: center;
    }
`;

const DropdownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 670px;
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    font-size: ${({theme}) => theme.size.desktop.mds}px;
    color: ${({theme}) => theme.colors.common.textColor};
    background: ${({theme}) => theme.colors.card.secondary};
    border-radius: ${({theme}) => theme.size.common.borderRadius};
    border: 1px solid ${({theme}) => theme.colors.common.textColor};

    &:hover {
    background-color:${({theme}) => theme.colors.card.highlighted};
    }

    &:hover ${Icon} {
        background-color: red;
    }

    @media (max-width: 576px) {
        width: 290px;
        font-size: ${({theme}) => theme.size.mobile.md}px;
    }
`;

const DropDownList = styled.ul`
    width: 670px;
    border-radius: ${({theme}) => theme.size.common.borderRadius};
    background: ${({theme}) => theme.colors.card.secondary};
    border: 2px solid #e5e5e5;
    color: ${({theme}) => theme.colors.common.textColor};

    &:first-child {
    padding-top: 0.8em;
    }

    @media (max-width: 576px) {
        width: 290px;
        font-size: ${({theme}) => theme.size.mobile.md}px;
    };
`;

const ListItem= styled.li`
    padding-left: 1em;
    list-style: none;
    margin-bottom: 0.8em;
    
    &:hover {
    background-color:${({theme}) => theme.colors.card.highlighted};
    }
`;

export const DropDown = (props: {title: string; src: string; alt: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(state => !state);

    return (
      <DropDownContainer>
        <DropdownHeader onClick={toggling}>
            {props.title}
          <Icon src={props.src} alt={props.alt} />
        </DropdownHeader>
        {isOpen && (
            <DropDownList>
                  <ListItem>
                    </ListItem>     
            </DropDownList>
        )}
      </DropDownContainer>
    );
  };