import { useSelector, useDispatch } from 'react-redux'

export default function FavoriteList(props) {
const favoritesData = useSelector((state) => state.favorite.list)

const  favorites = favoritesData.map((e, i) => <div key={i}>{e.name}</div>)

  return (
    <div className="bg-blue text-white border-2 border-gray-dark m-2 p-1">
      <p className="font-extrabold text-lg text-center">Favorite Stations</p>
      {favorites}
    </div>
  );
}
