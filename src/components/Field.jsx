import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing } from "../base/Variables.jsx";
import Grid from "./Grid.jsx";

const FieldGrid = styled(Grid)`
  grid-template-columns: auto;
  grid-row-gap: 0;
  padding: ${spacing.x2} 0 ${spacing.x4};
`;

const FieldItem = styled(Grid)`
  padding: 0;
  text-align: left;
  align-items: baseline;
  width: 100%;
  grid-template-columns: minmax(auto, 3rem) 1fr;
  grid-gap: 1.5rem;
  line-height: normal;
`;

const FieldLabel = styled.h6`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;

const FieldValue = styled(FieldLabel)`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Default Value - displays when a Field's value is empty */
  &:empty {
    &:before {
      content: "- - -";
    }
  }
`;

function Field({
    className, id, label, value,
}) {
    return (
        <FieldItem
            className={className}
            id={id}
        >
            <FieldLabel>{label}</FieldLabel>
            <FieldValue>{value}</FieldValue>
        </FieldItem>
    );
}

Field.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
};
Field.defaultProps = {
    className: null,
    id: null,
    label: null,
    value: null,
};

function FieldGroup({
    children, className, data, id,
}) {
    return (
        <FieldGrid
            className={className}
            id={id}
        >
            {children
                || data.map((item, index) => {
                    return (
                        <Field
                            key={item.id || item.label || index}
                            id={item.id}
                            label={item.label}
                            value={item.value}
                        />
                    );
                })}
        </FieldGrid>
    );
}

FieldGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    id: PropTypes.string,
};
FieldGroup.defaultProps = {
    children: null,
    className: null,
    data: null,
    id: null,
};

export { Field as default, FieldGroup };