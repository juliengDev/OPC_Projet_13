import { useState } from "react";
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
  &::placeholder {
    color: grey;
    font-size: 0.7em;
  }
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    console.log(username);
    setUsername("");
  }

  return (
    <Main>
      <SectionSignIn>
        <Icon className="fa fa-user-circle" />
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input // controlled element
              placeholder="Adresse email"
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Mot de passe"
              type="text"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <LabelRemember htmlFor="remember-me">Remember me</LabelRemember>
          </InputRemember>
          <Link to={`/profile/${username}`}>
            <SignInBtn>Sign in</SignInBtn>
          </Link>
        </form>
      </SectionSignIn>
    </Main>
  );
}

export default SignIn;
