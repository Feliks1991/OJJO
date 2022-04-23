import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Wrapper from "../components/Wrapper";

const OurSocialContainer = styled(Wrapper)`
  padding: 20px 0 150px 0;
`;

const OurSocialImg = styled.div`
display: flex;
width: 100%;

  video {
    width: 555px;
    height: 312px;
  }
  img {
    width: 277.5px;
    height: 312px;
  }


`;



export default function OurSocial() {
  return (
    <OurSocialContainer>

        <SectionTitle subtitle="#ojjo_jewerly" title="Мы в социальных сетях" />

      <OurSocialImg>
        <video autoPlay loop muted>
          <source src="/images/videoplayback.mp4" type="video/mp4" />
        </video>
        <img src="/images/Social_1.png" alt="" />
        <img src="/images/Social_2.png" alt="" />

        </OurSocialImg>
        <OurSocialImg>

        <img src="/images/Social_3.png" alt="" />
        <img src="/images/Social_4.png" alt="" />
        <video autoPlay loop muted>
          <source src="/images/videoplayback_2.mp4" type="video/mp4" />
        </video>
      </OurSocialImg>
    </OurSocialContainer>
  );
}
