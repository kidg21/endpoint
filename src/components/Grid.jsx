import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = styled.section`
  position: relative;
  display: grid;
  grid-gap: ${(props) => {
    return props.gap || "";
  }};
  grid-template-columns: ${(props) => {
    return props.columns || "repeat(auto-fill, minmax(10rem, 1fr))";
  }};
  grid-template-rows: ${(props) => {
    return props.rows || "auto";
  }};
  width: 100%;
`;

function Grid({
  children, className, columns, gap, id, rows,
}) {
  // 1-12 colums with custom override
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 13) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  // 'auto' by default with custom override
  const setRows = rows;
  // 'gutter' between grid items
  const baseGap = 0.25;
  let setGap;
  switch (gap) {
    case "0":
      setGap = "0";
      break;
    case "xs":
      setGap = `${baseGap}rem`;
      break;
    case "sm":
      setGap = `${baseGap * 2}rem`;
      break;
    default:
      setGap = `${baseGap * 3}rem`;
      break;
    case "lg":
      setGap = `${baseGap * 4}rem`;
      break;
    case "xl":
      setGap = `${baseGap * 5}rem`;
      break;
    case "2xl":
      setGap = `${baseGap * 6}rem`;
      break;
    case "3xl":
      setGap = `${baseGap * 7}rem`;
      break;
    case "4xl":
      setGap = `${baseGap * 8}rem`;
      break;
  }

  return (
    <GridWrapper
      className={className}
      columns={setColumns}
      gap={setGap}
      id={id}
      rows={setRows}
    >
      {children}
    </GridWrapper>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Defines the widths of grid columns
   *
   * Options: 1-12 or any standard value accepted by the CSS Grid property, 'grid-template-columns'.
   */
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets the 'gutter' between grid items */
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
  /** Defines the heights of grid rows
   *
   * Options: Any standard value accepted by the CSS Grid property, 'grid-template-rows'.
   */
  rows: PropTypes.string,
};

Grid.defaultProps = {
  children: null,
  className: null,
  columns: null,
  gap: null,
  id: null,
  rows: null,
};

export default Grid;
