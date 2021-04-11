import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../service/apiService';
import {Card} from '../components';

function DetailCard({item}) {
  const [datas, setDatas] = useState({});
  console.log(item);
  const [downloaded, setDownloaded] = useState(false);
  const fetchAllData = async () => {
    const datas = await fetchMarvelData(item.resourceURI);
    setDatas(datas.data.results);
    setDownloaded(true);
    console.log(datas);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {downloaded && datas.map((item) => (
        <Card
          data={item}
        />
      ))}
    </div>
  )
}

export default DetailCard
