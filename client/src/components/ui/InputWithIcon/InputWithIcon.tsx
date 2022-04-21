import React from "react";
import styled from "styled-components";
import { Input } from "../Input/Input.style";

interface IconInInput {
    imageSize?:{
        width: string;
        height: string;
    };
}

export const Icon = styled.img<IconInInput>`
    display: flex-start;
    margin-right: 15px;
    margin-left: 15px;
    transition: 0.2s;
    width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "20px")};
    height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "20px")};

    @media (max-width: 576px) {
        width: ${({ imageSize }) => (imageSize?.width ? imageSize.width : "15px")};
        height: ${({ imageSize }) => (imageSize?.height ? imageSize.height : "15px")};
    } 
`;

export const InputIcon = styled(Input)`
    display: flex-start;
    justify-content: start;
    align-items: center;
    margin-bottom: 15px;
    font-size: ${({ theme, fontSizeDesktop }) =>
        fontSizeDesktop ? theme.size.desktop[fontSizeDesktop] : theme.size.desktop.mds}px;
    font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
    background: ${({ theme }) => theme.colors.input.primary};
    width: ${({ width }) => (width ? width : 300)}px;
    height: ${({ height }) => (height ? height : 44)}px;

    @media (max-width: 576px) {
        font-size: ${({ theme, fontSizeMobile }) =>
        fontSizeMobile ? theme.size.mobile[fontSizeMobile] : theme.size.mobile.md}px;
        font-weight: ${({ theme, fontWeight }) =>
        fontWeight ? theme.weight[fontWeight] : theme.weight.regular};
        background: ${({ theme }) => theme.colors.input.transparent};
        width: ${({ width }) => (width ? width : 300)}px;
        height: ${({ height }) => (height ? height : 44)}px;
    }
`;

export const InputWithIcon = (props: { text: string; src: string }) => {
    return (
        <div>
            <InputIcon>
                <Icon src={props.src} /> {props.text}
            </InputIcon>
        </div>
    );
};