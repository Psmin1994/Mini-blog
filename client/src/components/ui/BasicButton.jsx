import * as React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 8px;
  border-width: 1px;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

export default function BasicButton(props) {
  const { title, onClickItem } = props;

  return (
    <>
      <StyledButton onClick={onClickItem} variant="contained" color="primary">
        {title}
      </StyledButton>
    </>
  );
}
