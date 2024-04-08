import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  // .main .bg-dark

  flex: 1;
  background-color: #12002b;
`;

const SectionSignIn = styled.section`
  // .sign-in-content
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;
const Icon = styled.i`
  // .sign-in-icon
  font-size: 1rem;
`;
const InputWrapper = styled.div`
  // .input-wrapper
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  //.input-wrapper label
  font-weight: bold;
`;

const Input = styled.input`
  // .input-wrapper input
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  // .input-remember
  margin-left: 0.25rem;
  display: flex;
`;
const LabelRemember = styled.label`
  // .input-remember label
  margin-left: 0.25rem;
`;

const SignInBtn = styled.span`
  // .sign-in-button
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
function SignIn() {
  return (
    <Main>
      <SectionSignIn>
        <Icon className="fa fa-user-circle" />
        <h1>Sign In</h1>

        <form>
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="text" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <LabelRemember htmlFor="remember-me">Remember me</LabelRemember>
          </InputRemember>
          <Link to="/profile/:userId">
            <SignInBtn>Sign in</SignInBtn>
          </Link>
        </form>
      </SectionSignIn>
    </Main>
  );
}

export default SignIn;
