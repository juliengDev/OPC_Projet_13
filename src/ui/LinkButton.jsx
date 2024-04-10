import { Link as RouteurLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const sharedStyles = `
font-size: 0.875rem;
line-height: 1.25rem;
background-color: #00bc77;
font-weight: bold;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 16px 2px;
cursor: pointer;
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;

  &:hover {
    background-color: #00a468;
    text-decoration: underline;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)
  }
`;

const Btn = styled.button`
  ${sharedStyles}
`;

const StyledLink = styled(RouteurLink)`
  ${sharedStyles}
`;
function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1") return <Btn onClick={() => navigate(-1)}>{children}</Btn>;
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default LinkButton;
