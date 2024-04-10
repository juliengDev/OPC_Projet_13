import { getToken } from "../../services/apiCustomer";

// Render as you fetch method here with a loader function use by React Router Dom:

export async function signInLoader({ params }) {
  try {
    // Attempt to retrieve the authentication token
    const userObj = {
      email: "tony@stark.com",
      password: "password123",
    };
    const token = await getToken(userObj);
    console.log(params); // permet de recuperer la valeur inscrite comme params de l'url, ici donc : (:userId)
    // Return the retrieved token
    return { tokenId: token };
  } catch (error) {
    console.error("Failed to load authentication token:", error);
    throw error;
  }
}

export default signInLoader;
