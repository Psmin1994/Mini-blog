import React from "react";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";
import BoardPage from "./components/page/BoardPage";

const Wrapper = styled("div")`
  max-width: 720px;
  padding: 0 16px;
  margin: 0 auto;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const MainTitleText = styled("a")`
  margin-top: 2rem;
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  color: #8179d7;

  &:active {
    color: #7165f0;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Router>
          <MainTitleText href="http://localhost:3000/board">미니 블로그</MainTitleText>
          <Routes>
            <Route index path="board" element={<BoardPage />} />
            <Route path="board/write" element={<PostWritePage />} />
            <Route path="board/:postId" element={<PostViewPage />} />
          </Routes>
        </Router>
      </Container>
    </Wrapper>
  );
};

export default App;
