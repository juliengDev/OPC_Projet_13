import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getError, getStatus, getToken, toggleRemember } from "./customerSlice";
import { fetchTokenData } from "../../services/apiCustomer";
import { resetStatus } from "../customers/customerSlice";
import { fetchCustomerData } from "../../services/apiCustomer";
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
  const [isErrorMsg, setIsErrorMsg] = useState(false);
  const [error, setError] = useState("");

  const token = useSelector(getToken);
  const status = useSelector(getStatus);
  const errorMsg = useSelector(getError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      setIsErrorMsg(true);
      setError(errorMsg);
      dispatch(resetStatus());
    }
  }, [status, errorMsg, dispatch]);

  // Data loading waterfall strategy (fetch on render approach)
  useEffect(() => {
    // This function will run whenever `token` changes
    if (token) {
      const fetchData = async () => {
        try {
          setIsSubmitting(true);

          // Call fetchCustomerData with the token
          const obj = await dispatch(fetchCustomerData(token));
          const newObj = obj.payload;

          setIsSubmitting(false);

          // Redirect the user to the profile page
          navigate(`/profile/${newObj.id}`);
        } catch (error) {
          console.error(error);
          setIsSubmitting(false);
        }
      };

      // Call the function if the token has been successfully recovered
      fetchData();
    }
  }, [token, dispatch, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    try {
      setIsSubmitting(true);
      const payload = { email, password };
      // Dispatch the fetchTokenData action with the formatted payload
      await dispatch(fetchTokenData(payload));
      dispatch(toggleRemember(isChecked));
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {isErrorMsg ? (
        <Error errorMsg={error} />
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
