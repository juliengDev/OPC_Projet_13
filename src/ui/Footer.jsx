import styled from "styled-components";

const FooterEl = styled.footer`
  //footer
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const FooterTxt = styled.p`
  //footer-text
  margin: 0;
  padding: 0;
`;

function Footer() {
  return (
    <FooterEl>
      <FooterTxt>Copyright 2020 Argent Bank</FooterTxt>
    </FooterEl>
  );
}

export default Footer;
