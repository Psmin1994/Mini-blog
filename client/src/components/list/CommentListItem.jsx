import React from "react";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")`
  padding: 1rem;
`;

const CommentText = styled("span")`
  font-size: 1rem;
`;

const CommentListItem = (props) => {
  const { comment } = props;
  return (
    <Wrapper>
      <CommentText>{comment}</CommentText>
    </Wrapper>
  );
};

export default CommentListItem;
