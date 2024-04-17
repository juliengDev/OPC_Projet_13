import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import argentBankLogo from "/src/assets/img/argentBankLogo.png";
import { getCustomer, logout } from "../features/customers/customerSlice";

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

const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 0 1rem;
`;
const NavItem = styled.div`
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
      <LogoImg src={argentBankLogo} alt="Argent Bank Logo" />
      <LogoName>Argent Bank</LogoName>
    </>
  );
}

function SignIn() {
  return (
    <NavItem>
      <Icon className="fa fa-user-circle fa-lg" />
      Sign In
    </NavItem>
  );
}

function SignOut({ onClick }) {
  return (
    <NavItem onClick={onClick}>
      <Icon className="fa fa-sign-out-alt fa-lg" />
      Sign Out
    </NavItem>
  );
}

function Profil({ firstName }) {
  return (
    <NavItem>
      <Icon className="fa fa-user-circle fa-lg" />
      {firstName}
    </NavItem>
  );
}

function Header() {
  const customer = useSelector(getCustomer);
  const id = customer?.id;
  const firstName = customer?.firstName;
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logout());
  }
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <SignContainer>
        {!id && (
          <Link to="/login">
            <SignIn />
          </Link>
        )}

        {id && (
          <Link to={`/profile/${id}`}>
            <Profil firstName={firstName} />
          </Link>
        )}
        {id && (
          <Link to="/">
            <SignOut onClick={handleSignOut} />
          </Link>
        )}
      </SignContainer>
    </Nav>
  );
}

export default Header;
