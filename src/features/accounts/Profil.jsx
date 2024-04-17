import styled from "styled-components";
import Account from "./Account";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditAccount from "./EditAccount";
import { getCustomer } from "../customers/customerSlice";


const Main = styled.main`
  // .main .bg-dark
  flex: 1;
  background-color: #12002b;
`;

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const H1 = styled.h1`
  margin: 0.67em 0;
`;

const EditBtn = styled.button`
  // .edit-button
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const H2 = styled.h2`
  // .sr-only
  color: white;
  margin: 2rem;
`;

function Profil() {
  // const token = useLoaderData();
  // console.log(token);
  // const error = useRouteError();

  // selector function (redux recommend to do data manipulation here , can be a derive state for exemple). This function has to be import from the slice file.
  const customer = useSelector(getCustomer);
  const firstName = customer?.firstName;
  const lastName = customer?.lastName;
  const [displayEditName, setDisplayEditName] = useState(false);

  return (
    <Main>
      <Header>
        <H1>
          Welcome back
          {!displayEditName && <br />}
          {!displayEditName && `${firstName} ${lastName}`}
        </H1>
        {/* <p>{error.message}</p> */}
        {!displayEditName && (
          <EditBtn onClick={() => setDisplayEditName(!displayEditName)}>
            Edit Name
          </EditBtn>
        )}
        {displayEditName && (
          <EditAccount
            firstName={firstName}
            lastName={lastName}
            setDisplayEditName={setDisplayEditName}
            displayEditName={displayEditName}
          />
        )}
      </Header>
      <H2>Accounts</H2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </Main>
  );
}

export default Profil;
