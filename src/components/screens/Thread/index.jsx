import React from "react";
import styled from "styled-components";

import { Post, Comment } from "components/molecules";

const Thread = (
  <StyledContent>
    <Post />
    <Comment />
  </StyledContent>
);

const StyledContent = styled.div`
  max-width: 98vw;
  overflow: auto;
  background-color: white;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Thread;
