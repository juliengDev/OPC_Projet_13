export const isValidEmail = (str) =>
  // https://uibakery.io/regex-library/email
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
    str
  );

export const isValidName = (str) => /^[a-z ,.'-]+$/i.test(str);
