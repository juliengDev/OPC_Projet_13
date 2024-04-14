import { getCustomerData, getTokenData } from "../../services/apiCustomer";
import store from "../../store";
import { redirect } from "react-router-dom";
import { isValidEmail } from "../../utils/regex";

import { setLoggedInUser, setRemember } from "./customerSlice";

export async function action({ request }) {
  // Retrieve the information collected when the form is submitted
  // formData() is a web API provide by the browser (nothing relate to React here)
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const remember = data.rememberMe === "on";

  const errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid e-mail address";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // If the Remember box is ticked by the user, the state is updated with this information
  if (remember) store.dispatch(setRemember(true));

  // If everything is ok
  // Response of the API CALL post user/login
  const { token } = (await getTokenData(data)).body;
  // Response of the API CALL post user/profile with the JTW token
  const customer = (await getCustomerData(token)).body;

  const newObj = {
    ...customer,
    token,
  };
  // update the global ui customer state by using the action creator function of the customer slice
  store.dispatch(setLoggedInUser(newObj));

  // Redirect to the profil page with the id get from the API call as params

  return redirect(`/profile/${customer.id}`);
}
