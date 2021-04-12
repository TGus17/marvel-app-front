import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../service/apiService';
import { Card, LoadingSpinner } from '../components';

function DetailCard({item}) {
  const [datas, setDatas] = useState({});
  const [downloaded, setDownloaded] = useState(false);
  
  const fetchAllData = async () => {
    const datas = await fetchMarvelData(item.resourceURI);
    setDatas(datas.data.results);
    setDownloaded(true);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {!downloaded
        ?
        <LoadingSpinner />
        :
        datas.map((item) => (
        <Card
          data={item}
        />
      ))}
    </div>
  )
}

export default DetailCard
