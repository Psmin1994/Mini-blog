import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BasicButton from "../ui/BasicButton";
import PostList from "../list/PostList";
import useAxios from "../../hooks/useAxios";

const BtnWrapper = styled("div")`
  margin-left: auto;
`;

const BoardPage = () => {
  const navigate = useNavigate();

  const { data, error, loading } = useAxios("/board/post");

  return (
    <>
      <BtnWrapper>
        <BasicButton title={"글 작성하기"} onClickItem={() => navigate("/board/write")}></BasicButton>
      </BtnWrapper>

      {loading ? (
        <p>Data is currently loading...</p>
      ) : error ? (
        <p>There was an error loading</p>
      ) : (
        data && (
          <PostList
            posts={data}
            onClickItem={(item) => {
              navigate(`/board/${item.post_id}`);
            }}></PostList>
        )
      )}
    </>
  );
};

export default BoardPage;
