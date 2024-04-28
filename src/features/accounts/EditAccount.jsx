import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { isValidName } from "../../utils/regex";
import { formatString } from "../../utils/helper";
import { getCustomer } from "../customers/customerSlice";
import { fetchCustomerUpdate } from "../../services/apiCustomer";
import Loader from "../../ui/Loader";

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

function EditAccount({
  firstName,
  lastName,
  setDisplayEditName,
  displayEditName,
}) {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastname] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateCompleted, setUpdateCompleted] = useState(false);

  const { token } = useSelector(getCustomer);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newFirstName && !newLastName) return;
    if (
      isValidName(newFirstName) === true &&
      isValidName(newLastName) === true
    ) {
      const formatedFirstname = formatString(newFirstName);
      const formatedLastname = formatString(newLastName);

      const payload = {
        firstName: formatedFirstname,
        lastName: formatedLastname,
      };
      setIsSubmitting(true);
      const data = {
        payload,
        token: token,
      };
      try {
        await dispatch(fetchCustomerUpdate(data));
        setIsSubmitting(false);
        setUpdateCompleted(true);
      } catch (error) {
        console.error("Error:", error);
        setIsSubmitting(false);
      }

      setDisplayEditName(!displayEditName);
      setNewFirstName("");
      setNewLastname("");
    }
  }
  return (
    <>
      {isSubmitting && <Loader />}
      {!updateCompleted && (
        <form onSubmit={handleSubmit}>
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
            <Btn type="submit">Save</Btn>
            <Btn
              onClick={(e) => {
                e.preventDefault();
                setDisplayEditName(!displayEditName);
              }}
            >
              Cancel
            </Btn>
          </ButtonWrapper>
        </form>
      )}
    </>
  );
}

export default EditAccount;
