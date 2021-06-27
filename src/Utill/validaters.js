export function validateId(identity) {
  if (identity === '') {
    return true;
  }
  const idreg = /^[a-z0-9]{5,15}$/;
  const isIdValid = idreg.test(identity);
  return isIdValid;
}
export function validateIdColor(identity) {
  const idreg = /^[a-z0-9]{5,15}$/;
  const isIdValid = idreg.test(identity);
  return isIdValid;
}

export function validatePw(password) {
  if (password === '') {
    return true;
  }
  const pwreg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,18}/g;
  const isPwValid = pwreg.test(password);
  return isPwValid;
}

export function confirmPassword(password, rePassword) {
  if (password === rePassword) {
    return true;
  }
}

export function validateEmail(email) {
  if (email === '') {
    return true;
  }

  const emailreg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const isEmailValid = emailreg.test(email);
  return isEmailValid;
}

export function validatePhone(phone) {
  if (phone === '') {
    return true;
  }

  const phonereg = /^\d{3}\d{3,4}\d{4}$/;
  const isPhoneValid = phonereg.test(phone);
  return isPhoneValid;
}
