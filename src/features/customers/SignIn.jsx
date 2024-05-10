import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getError, toggleRemember } from "./customerSlice";
import { fetchTokenData, fetchCustomerData } from "../../services/apiCustomer";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMsg = useSelector(getError);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    dispatch(toggleRemember(isChecked));
    try {
      setIsSubmitting(true);
      const payload = { email, password };
      // Dispatch the fetchTokenData action with the formatted payload
      const newToken = await dispatch(fetchTokenData(payload));
      if (!newToken.payload) return;
      const obj = await dispatch(fetchCustomerData(newToken.payload));
      const newObj = obj.payload;
      navigate(`/profile/${newObj.id}`);
    } catch (error) {
      console.error("Error: ", error);
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {errorMsg ? (
        <Error errorMsg={errorMsg} />
      ) : (
        <>
          {isSubmitting && <Loader />}
          <Main>
            <SectionSignIn>
              <Icon className="fa fa-user-circle" />
              <h1>Sign In</h1>

              <form onSubmit={handleSubmit}>
                <InputWrapper>
                  <Label>Username</Label>
                  <Input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputWrapper>

                <InputRemember>
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <LabelRemember htmlFor="remember-me">
                    Remember me
                  </LabelRemember>
                </InputRemember>

                <SignInBtn type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </SignInBtn>
              </form>
            </SectionSignIn>
          </Main>
        </>
      )}
    </>
  );
}

export default SignIn;
