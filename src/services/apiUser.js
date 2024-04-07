const API_URL = "https://argentbank.com/api";

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
