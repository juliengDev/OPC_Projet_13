const API_URL = "https://argentbank.com/api";

export async function getTransactions(transactionId) {
  const res = await fetch(`${API_URL}/transaction/${transactionId}`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error(`Failed getting transaction #${transactionId}`);

  const { data } = await res.json();
  return data;
}

export async function getTransactionUpdate(transactionId, updateObj) {
  try {
    const res = await fetch(`${API_URL}/transaction/${transactionId}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your transaction");
  }
}
