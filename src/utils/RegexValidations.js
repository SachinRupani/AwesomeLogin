const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;

export function isEmailValid(inputEmail) {
  return EMAIL_REGEX.test(inputEmail);
}

export function isPasswordValid(inputPassword) {
  return PASSWORD_REGEX.test(inputPassword);
}
