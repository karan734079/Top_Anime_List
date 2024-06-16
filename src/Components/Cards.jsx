/* eslint-disable react/prop-types */

const Cards = ({ item , index}) => {

  return (
    <div className="anime-item bg-white shadow-lg  rounded-lg overflow-hidden m-4 w-full sm:w-72 md:w-64 lg:w-60 xl:w-56 transition transform hover:scale-105 ring-0 hover:ring-4 hover:ring-white">
      <div className="p-4">
        <span className="text-gray-800 font-bold text-md">{index}</span>
      </div>
      <img src={item.images?.jpg?.image_url} alt={item.title} className="anime-image w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 mt-2">Score: {item.score}</p>
        <p className="text-gray-600 mt-1">Episodes: {item.episodes}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block text-center">
          Read More -&gt;
        </a>
      </div>
    </div>
  )
}

export default Cards;
