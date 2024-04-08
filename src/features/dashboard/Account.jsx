import styled from "styled-components";

const accountContentWrapperStyle = `width: 100%;
flex: 1;`;

const AccountEl = styled.section`
  // .account
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.div`
  // .account-content-wrapper
  ${accountContentWrapperStyle}
`;

const H3 = styled.h3`
  // .account-title
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  // .account-amount
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  // .account-amount-description
  margin: 0;
`;

const CtaBtnWrapper = styled.div`
  // .account-content-wrapper .cta
  ${accountContentWrapperStyle}

  @media (min-width: 720px) {
    flex: 0;
  }
`;

const CtaBtn = styled.button`
  // .transaction-button
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 720px) {
    width: 200px;
  }
`;

function Account({ title, amount, description }) {
  return (
    <AccountEl>
      <AccountContentWrapper>
        <H3>{title}</H3>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountContentWrapper>
      <CtaBtnWrapper>
        <CtaBtn>View transactions</CtaBtn>
      </CtaBtnWrapper>
    </AccountEl>
  );
}

export default Account;
