import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Form } from "react-router-dom";
import styled from "styled-components";
import { isValidName } from "../../utils/regex";
import { updateFirstName, updateLastName } from "../customers/customerSlice";
import { formatString } from "../../utils/helper";

const InputWrapper = styled.div`
  // .input-wrapper
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-align: left;
  margin: 1rem;
`;

const Input = styled.input`
  // .input-wrapper input
  max-width: 11rem;
  padding: 5px;
  font-size: 0.9rem;
  &::placeholder {
    color: grey;
    font-size: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-left: 0.7rem;
`;

const Btn = styled.button`
  padding: 0.5em 2em;
  color: #6f63f5;
  border: 2px solid #6f63f5;
  font-weight: 600;
  font-size: 0.8em;
`;

function EditAccount({ firstName, lastName }) {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastname] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!newFirstName && !newLastName) return;
    if (
      isValidName(newFirstName) === true &&
      isValidName(newLastName) === true
    ) {
      const formatedFirstname = formatString(newFirstName);
      const formatedLastname = formatString(newLastName);

      console.log(formatedFirstname, formatedLastname);

      dispatch(updateFirstName(formatedFirstname));
      dispatch(updateLastName(formatedLastname));
      setNewFirstName("");
      setNewLastname("");
    }
  }
  return (
    // <Form method="POST">
    <form>
      <InputWrapper>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
          placeholder={firstName}
          required
        />
        <Input
          type="text"
          name="lastname"
          id="lastname"
          value={newLastName}
          onChange={(e) => setNewLastname(e.target.value)}
          placeholder={lastName}
          required
        />
      </InputWrapper>
      <ButtonWrapper>
        <Btn onClick={handleSubmit}>Save</Btn>
        <Btn>Cancel</Btn>
      </ButtonWrapper>
    </form>
    // </Form>
  );
}

export default EditAccount;
