import { requestProcess } from '../service';
const verifyEmailAndPassword = (email, password) => {
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  const passwordMinLength = 6;
  const isEmailAndPasswordValid = password.length >= passwordMinLength && emailFormat;
  return isEmailAndPasswordValid;
};

const verifyUser = async (token, history, setUser) => {
  const user = await requestProcess('user', token, 'GET');
  if (!user) return history.push('/');
  setUser(user);
}

export {
  verifyEmailAndPassword,
  verifyUser,
};
