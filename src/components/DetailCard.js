import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../service/apiService';
import {Card} from '../components';

function DetailCard(item) {
  const [characters, setCharacters] = useState({});
  const [comics, setComics] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  const fetchAllData = async () => {
    const datas = await fetchMarvelData(item.item.uri);
    setCharacters(datas.data.results);
    setDownloaded(true);
    console.log(datas);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {downloaded && characters.map((item) => (
        <Card
          data={item}
        />
      ))}
    </div>
  )
}

export default DetailCard
