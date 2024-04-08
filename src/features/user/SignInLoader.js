import { getToken } from "../../services/apiUser";

// Render as you fetch method here with a loader function use by React Router Dom:

export async function HomeLoader() {
  try {
    // Attempt to retrieve the authentication token
    const userObj = {
      email: "tony@stark.com",
      password: "password123",
    };
    const token = await getToken(userObj);

    // Return the retrieved token
    return { tokenId: token };
  } catch (error) {
    console.error("Failed to load authentication token:", error);
    return null; // Return null in case of an error or unsuccessful token retrieval
  }
}

export default HomeLoader;
