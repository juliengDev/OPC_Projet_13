import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  // class="main-nav-logo-image"
  max-width: 100%;
  width: 200px;
`;
const LogoName = styled.h1`
  // class="sr-only"
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const Nav = styled.nav`
  // class="main-nav">
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavItem = styled.a`
  // .main-nav a
  // .main-nav-item
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
`;

const Icon = styled.i`
  font-size: 1.2em;
  margin-right: 0.5rem;
`;
function Logo() {
  return (
    <>
      <LogoImg
        src="./src/assets/img/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <LogoName>Argent Bank</LogoName>
    </>
  );
}

function SignIn() {
  return (
    <div>
      <NavItem class="main-nav-item">
        <Icon className="fa fa-user-circle" />
        Sign In
      </NavItem>
    </div>
  );
}

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/login">
        <SignIn />
      </Link>
    </Nav>
  );
}

export default Header;
