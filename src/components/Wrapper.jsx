import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

const WrapContainer = styled(Container)`
  width: 100%;
  max-width: 1110px;
  padding: 0 24px;
`;

export default function Wrapper({ children, ...otherProps }) {
  return (
    <Container {...otherProps}>
      <WrapContainer>{children}</WrapContainer>
    </Container>
  );
}
