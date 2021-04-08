import React, { useEffect, useState } from 'react';
import { fetchApi } from '../service';
import ComicCard from '../components/ComicCard';

function Home() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetchApi();
    console.log(response.data.results);
    setDatas(response.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {datas.map(({ name, thumbnail: { extension, path } }) => (
        <ComicCard
          name={name}
          image={`${path}.${extension}`}
        />
        ))
      }
    </div>
  )
}
export default Home;
