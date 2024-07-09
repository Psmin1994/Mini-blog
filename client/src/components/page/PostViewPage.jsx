import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import BasicButton from "../ui/BasicButton";
import axios from "axios";

const BtnWrapper = styled("div")`
  margin-left: auto;
`;

const BtnFlexWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
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
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");

  const { postId } = useParams();

  useEffect(() => {
    const getPostById = async () => {
      try {
        let res = await axios.get(`/board/post/${postId}`);

        console.log(res);

        return res.data[0];
      } catch (err) {
        console.log(err);
      }
    };

    getPostById().then((res) => setPost(res));

    let getComments = async () => {
      try {
        let res = await axios.get(`/board/comment/${postId}`);

        console.log(res);

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

  const deletePost = async () => {
    try {
      let res = await axios.delete(`/board/post/${post.post_id}`);

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

      <BtnFlexWrapper>
        <BasicButton
          title={"글 삭제하기"}
          onClickItem={() => {
            deletePost();

            navigate("/board");
          }}></BasicButton>

        <BasicButton
          title={"댓글 작성하기"}
          onClickItem={() => {
            addComment();

            window.location.reload();
          }}></BasicButton>
      </BtnFlexWrapper>
    </>
  );
};

export default PostViewPage;
