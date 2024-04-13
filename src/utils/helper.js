export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function formatString(input) {
  // Supprimer les espaces blancs
  const trimmedString = input.trim();

  // Mettre la première lettre en majuscule et le reste en minuscules
  const formattedString =
    trimmedString.charAt(0).toUpperCase() +
    trimmedString.slice(1).toLowerCase();

  return formattedString;
}
