import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../service';

function Details(props) {
  const [marvelData, setMarvelData] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const { location: { state: { uri } } } = props;

  const fetchData = async () => {
    const { data: { results: [fetchedResult] } } = await fetchMarvelData(uri);
    setMarvelData(fetchedResult);
    setDownloaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{marvelData.name}</h1>
      <p>{marvelData.description}</p>
      {downloaded &&
        <img src={`${marvelData.thumbnail.path}.${marvelData.thumbnail.extension}`} alt={marvelData.name}/>}
    </div>
  );
}

export default Details;
