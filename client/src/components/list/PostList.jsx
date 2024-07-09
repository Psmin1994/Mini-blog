import React from "react";
import { styled } from "@mui/material/styles";
import PostListItem from "./PostListItem";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

const PostList = (props) => {
  const { posts, onClickItem } = props;

  return (
    <Container>
      {posts.map((post, index) => {
        return <PostListItem key={post.post_id} post={post} onClickItem={onClickItem} />;
      })}
    </Container>
  );
};

export default PostList;
