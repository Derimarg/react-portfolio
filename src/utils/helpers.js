// Capitalizes the first letter of a string safely
export function capitalizeFirstLetter(string) {
  if (!string || typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Validates an email address format using regex
export function validateEmail(email) {
  if (!email || typeof email !== "string") return false;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

// Replaces hyphens with spaces and capitalizes each word
export function removeHyphensAndCapitalize(string) {
  if (!string || typeof string !== "string") return "";
  return string
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

// Replaces spaces with hyphens (useful for URL slugs)
export function addHyphens(string) {
  if (!string || typeof string !== "string") return "";
  return string.replace(/\s+/g, "-").toLowerCase();
}