import { Form, useNavigation, useActionData } from "react-router-dom";

import styled from "styled-components";

const Main = styled.main`
  // .main .bg-dark

  flex: 1;
  background-color: #12002b;
  overflow: scroll;
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
  font-size: 0.9rem;
  &::placeholder {
    color: grey;
    font-size: 0.8rem;
  }
`;
const InputError = styled.p`
  font-size: 0.9rem;
  color: red;
  margin-bottom: 1rem;
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

const SignInBtn = styled.button`
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
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
function SignIn() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // error handling in form actions
  const formErrors = useActionData();

  return (
    <Main>
      <SectionSignIn>
        <Icon className="fa fa-user-circle" />
        <h1>Sign In</h1>

        <Form method="POST">
          <InputWrapper>
            <Label>Username</Label>
            <Input
              placeholder="Adresse email"
              type="text"
              name="email"
              id="email"
              required
            />
          </InputWrapper>
          {formErrors?.email && <InputError>{formErrors.email}</InputError>}
          <InputWrapper>
            <Label>Password</Label>
            <Input
              placeholder="Mot de passe"
              type="text"
              id="password"
              name="password"
              required
            />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" name="rememberMe" />
            <LabelRemember>Remember me</LabelRemember>
          </InputRemember>
          <SignInBtn disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </SignInBtn>
        </Form>
      </SectionSignIn>
    </Main>
  );
}

export default SignIn;
