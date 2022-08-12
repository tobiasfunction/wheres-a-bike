import { useSelector, useDispatch } from "react-redux";

import Favorite from "./Favorite";

export default function FavoriteList(props) {
  const favoritesData = useSelector((state) => state.favorite.list);

  const favorites = favoritesData.length ? (
    favoritesData.map((e, i) => <Favorite key={i} data={e} />)
  ) : (
    <div>You don't have any favorite stations yet.</div>
  );

  return (
    <div className="bg-blue text-white border-1 border-gray-dark m-2 p-2">
      <p className="font-black text-xl text-center m-2">Favorite Stations</p>
      <div className="overflow-y-auto h-80">{favorites}</div>
    </div>
  );
}
