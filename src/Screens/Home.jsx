import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
// import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/top/anime");
      const data1 = await response.json();
      console.log(data1);
      setData(data1?.data || []);
      console.log(data1?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen p-4 rounded-2xl">
      <h1 className="font-bold font-sans text-3xl text-center cursor-default text-gray-200 m-8 transition transform hover:scale-105">
        List of Top 25 Anime
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <Cards key={item.mal_id} item={item} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Home;
