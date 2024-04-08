const API_URL = "http://localhost:3001/api/v1";

export async function getToken(userObj) {
  try {
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error();
    const data = await res.json();
    const token = data.body.token;
    return token;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to authenticate");
  }
}

export async function getUser(userId) {
  const res = await fetch(`${API_URL}/${userId}`);
  if (!res.ok) throw Error(`Couldn't find user #${userId}`);

  const { data } = await res.json();
  return data;
}

export async function getUserUpdate(userId, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your account informations");
  }
}
