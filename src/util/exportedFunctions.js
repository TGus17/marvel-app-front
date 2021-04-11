import { requestProcess } from '../service';
const verifyEmailAndPassword = (email, password) => {
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  const passwordMinLength = 6;
  const isEmailAndPasswordValid = password.length >= passwordMinLength && emailFormat;
  return isEmailAndPasswordValid;
};

const setUser = (user, setEmail, setName) => {
  setEmail(user.email);
  setName(user.name);
};

const verifyUser = async (token, history, setEmail, setName) => {
  const returnedUser = await requestProcess('user', token, 'GET');
  if (!returnedUser) return history.push('/');
  setUser(returnedUser, setEmail, setName);
};

const isUserLogged = async (history, setEmail, setName) => {
  const authorization = JSON.parse(localStorage.getItem('token'));
  if (!authorization) return history.push('/');
  verifyUser(authorization, history, setEmail, setName);
};

export {
  verifyEmailAndPassword,
  isUserLogged,
};
