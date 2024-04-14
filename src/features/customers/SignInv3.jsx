import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchTokenData, fetchCustomerData, getToken } from "./customerSlicev3";

import store from "../../store";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  const [customer, setCustomer] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    setIsSubmitting(true);
    const payload = { email, password };
    try {
      // Dispatch the fetchTokenData action
      await dispatch(fetchTokenData(payload));

      // After the token is fetched, get it from the state
      const token = getToken(store.getState());

      // Now dispatch the fetchCustomerData action with the token
      const obj = await dispatch(fetchCustomerData(token));
      const newObj = obj.payload;
      setCustomer({ ...newObj, isChecked, token });

      setIsSubmitting(false);
      setRedirectToProfile(true);

      // At this point, both API calls are completed successfully
      // You can handle any further logic here if needed
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      // Handle errors if necessary
    }
  }

  if (redirectToProfile && customer) {
    navigate(`/profile/${customer.id}`);
  }

  return (
    <Main>
      <SectionSignIn>
        <Icon className="fa fa-user-circle" />
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Adresse email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputRemember>
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              value={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <LabelRemember htmlFor="remember-me">Remember me</LabelRemember>
          </InputRemember>
          <SignInBtn type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </SignInBtn>
        </form>
      </SectionSignIn>
    </Main>
  );
}

export default SignIn;
