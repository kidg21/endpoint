import styled from "styled-components";
import { colors, spacing } from "../base/Variables.jsx";

const Title = styled.h6`
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-weight: 400;
`;

const Divider = styled.hr`
    width: 100%;
    background: none;
    margin: ${spacing.x2} 0 0;
    border: 1px solid ${colors.grey20};
`;

export { Title, SubTitle, Divider };