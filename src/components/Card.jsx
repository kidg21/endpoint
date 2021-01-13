import React from "react";
import styled from "styled-components";
import { screen, colors, spacing } from "../base/Variables.jsx";
import Grid from "./Grid.jsx";
import Image from "./Image.jsx";

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: ${(props) => {
        return props.onClick ? "pointer" : "";
    }};
`;

const CardSectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: ${spacing.x2} ${spacing.x4} 0;
    // border-bottom: ${(props) => { return props.hasBorder ? `1px solid ${colors.black}` : ""; }};
`;

const ImageWrapper = styled.section`
  display: flex;
  max-height: 112px;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardGridWrapper = styled(Grid)`
  grid-template-columns: ${(props) => {
        // return props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : "repeat(auto-fill, minmax(325px, 1fr))";
    }};
  padding: ${(props) => {
        return props.padding;
    }};
    grid-template-columns: repeat(1, 1fr);
    @media ${screen.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${screen.desktop} {
        grid-template-columns: repeat(3, 1fr);
        max-width: 80%;
        margin: 0 auto;
    }
  ${CardWrapper} {
    height: 100%;
    box-shadow: ${colors.shade3} 0 0 1px 1px;
    transition: all 0.25s ease-in-out;
    &:hover {
        box-shadow: ${colors.shade5} 0 0 1px 1px, ${colors.shade2} 0.25rem 0.25rem 0.5rem;
    }
  }
`;

const Title = styled.h6`
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-weight: 400;
`;

const Divider = styled.hr`
    width: 100%;
    margin: 0;
    margin-top: ${spacing.x2};
`;

function CardSection({
    children, className, hasBorder,
  }) {
    return (
      <CardSectionWrapper
        className={className}
        hasBorder={hasBorder}
      >
        {children}
      </CardSectionWrapper>
    );
};

const Card = ({
    children,
    className,
    id,
    media,
    onClick,
    subtitle,
    title,
}) => {
    return (
        <CardWrapper
            className={className}
            onClick={onClick}
            id={id}
            media={media}
        >
            {media ? (
                <ImageWrapper>
                    <CardImage id={`${id}-Media`} src={media} fit />
                </ImageWrapper>
            ) : null}
            {title || subtitle ? (
                <CardSection hasBorder>
                    {title ? <Title>{title}</Title> : null}
                    {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
                    <Divider />
                </CardSection>
            ) : null}
            {children ? (
                <CardSectionWrapper>
                    {children}
                </CardSectionWrapper>
            ) : null}
        </CardWrapper>
    );
};

function CardGrid({
    children, className, columns, data, gap, id, padding, placeholder, rows,
}) {
    return (
        <CardGridWrapper
            className={className}
            columns={columns}
            padding={padding}
            gap={gap || "lg"}
            id={id}
            rows={rows}
            placeholder={placeholder}
        >
            {children
                || data.map((item) => {
                    return (
                        <Card
                            id={item.id}
                            key={item.id}
                            media={item.media}
                            onClick={item.onClick}
                            title={item.title}
                            variant={item.variant}
                        >
                            {item.children}
                        </Card>
                    );
                })}
        </CardGridWrapper>
    );
}

export { Card as default, CardGrid };