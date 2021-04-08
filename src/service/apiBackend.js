const baseUrl = 'http://localhost:3001';

const options = (body = null) => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const requestProcess = async (endpoint, body) => await fetch(`${baseUrl}/${endpoint}`, options(body))
  .then((response) => response.json())
  .catch((err) => console.log(err.message));

export default requestProcess;
