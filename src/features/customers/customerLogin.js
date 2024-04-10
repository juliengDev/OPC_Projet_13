import { getCustomer, getToken } from "../../services/apiCustomer";
import { redirect } from "react-router-dom";

export async function action({ request }) {
  // Retrieve the information collected when the form is submitted
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Response of the API CALL post user/login
  const { token } = (await getToken(data)).body;

  // Response of the API CALL post user/profile with the JTW token
  const customer = (await getCustomer(token)).body;
  console.log(customer);
  const { id } = customer;

  // Redirect to the profil page with the id get from the API call as params
  return redirect(`/profile/${id}`);
}
