import styled from "styled-components";

export default styled.div`
  border-top: ${(props) =>
    props.dark ? "1px solid #333333" : "1px solid #FFFFFF"};
`;
