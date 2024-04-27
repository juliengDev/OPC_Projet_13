import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const ErrorContainer = styled.div`
  margin: 10rem;
`;
const ErrorTxt = styled.p`
  margin: 4rem 0;
  font-size: 1.8rem;
`;
function Error({ errorMsg }) {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <h1>Something went wrong 😢</h1>
      <ErrorTxt>{error?.data || error?.message || errorMsg}</ErrorTxt>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </ErrorContainer>
  );
}

export default Error;
