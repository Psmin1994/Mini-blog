import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid grey;
`;

const StyledTitleLink = styled("a")`
  display: block;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0061c8;
  }
`;

const StyledContent = styled("div")`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: grey;
  font-size: 1rem;
`;

const PostListItem = (props) => {
  const { post, onClickItem } = props;

  return (
    <Container>
      <StyledTitleLink onClick={() => onClickItem(post)}>{post.title}</StyledTitleLink>
      <StyledContent>{post.content}</StyledContent>
    </Container>
  );
};

export default PostListItem;
