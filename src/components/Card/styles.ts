import { CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled(Link)`
  width: 345px;
`;

export const TitleContainer = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled(Typography).attrs({
  variant: "h5",
  component: "h2",
})`
  color: ${theme.colors.yellow};
  text-transform: uppercase;
`;
