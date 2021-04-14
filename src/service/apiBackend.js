// const baseUrl = 'https://tgus17-marvel-app-back.herokuapp.com';
const baseUrl = 'http://localhost:3001';



const options = (Authorization, method, body = null) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization,
  },
  body: body ? JSON.stringify(body) : undefined,
});

const requestProcess = async (endpoint, Authorization, method, body) => await fetch(`${baseUrl}/${endpoint}`, options(Authorization, method, body))
  .then((response) => response.json())
  .catch((err) => console.log(err.message));

export default requestProcess;
