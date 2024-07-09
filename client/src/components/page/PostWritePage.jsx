import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import BasicButton from "../ui/BasicButton";
import TextInput from "../ui/TextInput";
import axios from "axios";

const BtnWrapper = styled("div")`
  margin-left: auto;
`;

const PostWritePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = async () => {
    try {
      let res = await axios.post(`/board/Post`, { title, content });

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

      <TextInput
        rows={1}
        placeholder="제목"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}></TextInput>

      <TextInput
        rows={14}
        placeholder="내용"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}></TextInput>

      <BtnWrapper>
        <BasicButton
          title={"글 작성 완료"}
          onClickItem={() => {
            addPost();

            navigate("/board");
          }}></BasicButton>
      </BtnWrapper>
    </>
  );
};

export default PostWritePage;
