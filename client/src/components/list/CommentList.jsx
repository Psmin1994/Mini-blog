import React from "react";
import { styled } from "@mui/material/styles";
import CommentListItem from "./CommentListItem";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
`;

const CommentList = (props) => {
  const { comments } = props;

  return (
    <Container>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.comment_id} comment={comment.content}></CommentListItem>;
      })}
    </Container>
  );
};

export default CommentList;
