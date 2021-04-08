import md5 from 'md5';

const timeStamp = Math.floor(Date.now()/1000);
const privateKey = '701825624dd73f8b171426841822a4e34da863f4';
const apiKey = '68f698fee41b2eced262533902aeccbe';
const hash = md5(`${timeStamp}${privateKey}${apiKey}`);
const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=30`;

const fetchApi = async () => {
  const allComics = await fetch(url);
  const comicsParsed = allComics.json();
  // console.log(comicsParsed);
  return comicsParsed;
};

export default fetchApi;
