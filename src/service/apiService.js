import md5 from 'md5';
require('dotenv').config();

const { REACT_APP_PRIVATE_KEY, REACT_APP_PUBLIC_KEY } = process.env;
const timeStamp = Math.floor(Date.now()/1000);
// const privateKey = JSON.parse(REACT_APP_PRIVATE_KEY);
// const apiKey = JSON.parse(REACT_APP_PUBLIC_KEY);

const privateKey = REACT_APP_PRIVATE_KEY || '701825624dd73f8b171426841822a4e34da863f4';
const apiKey = REACT_APP_PUBLIC_KEY || '68f698fee41b2eced262533902aeccbe';

const hash = md5(`${timeStamp}${privateKey}${apiKey}`);

const fetchCharactersOrComics = async (param) => {
  const url = `http://gateway.marvel.com/v1/public/${param}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;
  const allData = await fetch(url);
  const allDataParsed = allData.json();
  return allDataParsed;
}

const fetchMarvelData = async (param) => {
  const url = `${param}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;
  const allData = await fetch(url);
  const allDataParsed = allData.json();
  return allDataParsed;
}

export {
  fetchCharactersOrComics,
  fetchMarvelData,
};
