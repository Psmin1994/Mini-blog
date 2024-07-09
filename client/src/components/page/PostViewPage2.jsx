import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import BasicButton from "../ui/BasicButton";
import axios from "axios";

const BtnWrapper = styled("div")`
  margin-left: auto;
`;

const PostContainer = styled("div")`
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled("p")`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ContentText = styled("p")`
  font-size: 1rem;
  line-height: 2rem;
  white-space: pre-wrap;
`;

const CommentLabel = styled("p")`
  font-size: 1rem;
  font-weight: 500;
`;

const PostViewPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const location = useLocation();

  const post = location.state.item;
  let postId = post.post_id;

  useEffect(() => {
    let getComments = async () => {
      try {
        let res = await axios.get(`/board/comment/${postId}`);

        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    getComments().then((res) => setData(res));
  }, [postId]);

  const addComment = async () => {
    try {
      let res = await axios.post(`/board/comment/${post.post_id}`, {
        content: comment,
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BtnWrapper>
        <BasicButton
          title={"뒤로 가기"}
          onClickItem={() => {
            navigate("/board");
          }}></BasicButton>
      </BtnWrapper>

      <PostContainer>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </PostContainer>

      <CommentLabel>댓글</CommentLabel>
      <CommentList comments={data}></CommentList>

      <TextInput
        rows={5}
        placeholder="댓글 내용"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}></TextInput>

      <BtnWrapper>
        <BasicButton
          title={"댓글 작성하기"}
          onClickItem={() => {
            addComment();
            window.location.reload();
          }}></BasicButton>
      </BtnWrapper>
    </>
  );
};

export default PostViewPage;
