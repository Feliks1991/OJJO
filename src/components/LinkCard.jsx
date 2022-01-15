import React from "react";
import styled from "styled-components";

const LinkItem = styled.div`
    position: relative;
    margin: 0 auto;
    width: 350px;
    height: ${(props) => (props.big ? "370px" : "280px")};

    :after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: transparent;
      background-image: ${(props) =>
        props.big
          ? "linear-gradient(180deg, rgba(180, 180, 180, 0) 0%, #333333 100%)"
          : "linear-gradient(180deg, rgba(180, 180, 180, 0) 20.31%, #333333 100%)"};
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      ${(props) =>
        props.big
          ? `
      font-weight: normal;
      font-size: 20.2px;
      line-height: 140%;
      `
          : 
      `
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      `}
      position: absolute;
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0%);
      color: #ffffff;
      z-index: 2;
      text-align: center;

    }
  
`;

export default function LinkCard({ ...props }) {
  return (
        <LinkItem {...props}>
          <img src={props.src} alt={props.label} />
          <span>{props.label}</span>
        </LinkItem>
  );
}
