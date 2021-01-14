import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Placeholder from "../images/placeholder-photo.png";

const ImageWrapper = styled.img`
  width: ${(props) => {
    return props.width || "100%";
  }};
  height: ${(props) => {
    return props.height || "auto";
}};
  cursor: ${(props) => {
    return props.onClick ? "pointer" : "";
  }};
  object-fit: ${(props) => {
    return props.fit ? "cover" : "";
  }};
`;

function Image({
  alt, className, height, onClick, src, width,
}) {
  return (
    <ImageWrapper
      alt={alt}
      className={className}
      height={height}
      onClick={onClick}
      src={src || Placeholder}
      title={alt}
      width={width}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Image.defaultProps = {
  className: null,
  height: null,
  onClick: null,
  src: "",
  width: null,
};

export default Image;
