import React from "react";
import signature from "../img/yooo.png";
import styled from "styled-components";

const FooterFlex = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  text-shadow: 0 0 0.02rem black, 0 0 0.8rem white;
  font-weight: bold;
  width: 100vw;
  justify-content: space-between;
`;

const Signature = styled.img`
  height: 8vh;
  margin-right: 1rem;
`;

const P = styled.p`
  padding-left: 1rem;
`;

const Footer = ({currantYear}) => {
  return (
    <FooterFlex>
      <P>Tots els drets reservats Copyright &copy; {currantYear} </P>
      <Signature src={signature} alt="Signat Krystel R"></Signature>
    </FooterFlex>
  );
};

export default Footer;
