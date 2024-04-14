const API_URL = "http://localhost:3001/api/v1";

export async function getTokenData(userObj) {
  try {
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (!res.ok) {
      if (data.status === 400)
        throw new Error(
          "Authentication failed. Please check your credentials and try again."
        );
      if (data.status === 500)
        throw new Error(
          "Oops! Something went wrong on our end. Please try again later."
        );
    }

    if (data.status === 200) return data;
  } catch (err) {
    throw new Error(err);
  }
}
export async function getCustomerData(authToken) {
  try {
    const res = await fetch(`${API_URL}/user/profile`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`, // Ajoute le token d'autorisation dans les headers
      },
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.status === 400)
        throw new Error(
          "Authentication failed. Please check your credentials and try again."
        );
      if (data.status === 500)
        throw new Error(
          "Oops! Something went wrong on our end. Please try again later."
        );
    }

    if (data.status === 200) return data;
  } catch (err) {
    throw new Error(`Error recovering your profile : ${err.message}`);
  }
}
