import { Typography } from "@material-ui/core";
import styled from "styled-components";
import theme from "../../styles/theme";

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  variant: "h5",
  component: "h2",
})`
  color: ${theme.colors.yellow};
`;

export const Paragraph = styled(Typography).attrs({
  variant: "body2",
  component: "p",
})`
  color: ${theme.colors.white};
`;
