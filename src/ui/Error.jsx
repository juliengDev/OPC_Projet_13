import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const ErrorContainer = styled.div`
  margin-top: 10rem;
`;
function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <ErrorContainer>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </ErrorContainer>
  );
}

export default Error;
