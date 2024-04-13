import { getCustomer, getToken } from "../../services/apiCustomer";
import store from "../../store";
import { redirect } from "react-router-dom";
import { isValidEmail } from "../../utils/regex";

import { setAccount, setRemember, setToken } from "./customerSlice";

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
  const { token } = (await getToken(data)).body;
  store.dispatch(setToken(token));
  // Response of the API CALL post user/profile with the JTW token
  const customer = (await getCustomer(token)).body;

  // update the global ui customer state by using the action creator function of the customer slice
  store.dispatch(setAccount(customer));

  // Redirect to the profil page with the id get from the API call as params

  return redirect(`/profile/${customer.id}`);
}
