import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { screen, colors, spacing } from "../base/Variables.jsx";
import { Title, SubTitle, Divider } from "../base/Typography.jsx";
import Grid from "./Grid.jsx";
import Image from "./Image.jsx";
import { FieldGroup } from "./Field.jsx";

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
  &:last-of-type {
      padding-bottom: ${spacing.x2};
  }
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
    grid-template-columns: repeat(1, 1fr);
    @media ${screen.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${screen.desktop} {
        grid-template-columns: repeat(3, 1fr);
        max-width: 80%; 
        margin: 0 auto;
    }
    padding: 1rem;
  ${CardWrapper} {
    height: 100%;
    box-shadow: ${colors.shade3} 0 0 1px 1px;
    transition: all 0.25s ease-in-out;
    &:hover {
        box-shadow: ${colors.shade5} 0 0 1px 1px, ${colors.shade2} 0.25rem 0.25rem 0.5rem;
    }
  }
`;

function CardSection({
    children, className,
}) {
    return (
        <CardSectionWrapper
            className={className}
        >
            {children}
        </CardSectionWrapper>
    );
}

CardSection.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CardSection.defaultProps = {
    children: null,
    className: null,
};

const Card = ({
    children,
    className,
    fields,
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
                <CardSection>
                    {title ? <Title>{title}</Title> : null}
                    {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
                    {fields ? <Divider /> : null}
                </CardSection>
            ) : null}
            {fields ? (
                <CardSectionWrapper>
                    <FieldGroup data={fields} />
                </CardSectionWrapper>
            ) : null}
            {children ? (
                <CardSectionWrapper>
                    {children}
                </CardSectionWrapper>
            ) : null}
        </CardWrapper>
    );
}


Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fields: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    id: PropTypes.string,
    media: PropTypes.string,
    onClick: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
};
Card.defaultProps = {
    children: null,
    className: null,
    fields: null,
    id: null,
    media: null,
    onClick: null,
    subtitle: null,
    title: null,
};

function CardGrid({
    children, className, data, gap, id,
}) {
    return (
        <CardGridWrapper
            className={className}
            gap={gap || "2xl"}
            id={id}
        >
            {children
                || data.map((item, index) => {
                    return (
                        <Card
                            key={item.id || item.title || index}
                            id={item.id}
                            fields={item.fields}
                            media={item.media}
                            onClick={item.onClick}
                            title={item.title}
                            subtitle={item.subtitle}
                            variant={item.variant}
                        >
                            {item.children}
                        </Card>
                    );
                })}
        </CardGridWrapper>
    );
}

CardGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    /** Sets the 'gutter' between grid items
     *
     * Options: Any switch case or any standard value accepted by the CSS Grid property, 'grid-gap'.
     */
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            "0",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "4xl",
        ]),
    ]),
    id: PropTypes.string,
};
CardGrid.defaultProps = {
    children: null,
    className: null,
    data: null,
    gap: null,
    id: null,
};

export { Card as default, CardSection, CardGrid };