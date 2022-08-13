import { useSelector, useDispatch } from "react-redux";
import { remove } from "../favorites/favoriteSlice";

import Favorite from "./Favorite";

export default function FavoriteList(props) {
  const favoritesData = useSelector((state) => state.favorite.list);
  const dispatch = useDispatch();

  const favorites = favoritesData.length ? (
    favoritesData.map((e, i) => (
      <Favorite
        key={i}
        data={e}
        removefavorite={() => dispatch(remove(e.id))}
      />
    ))
  ) : (
    <div className="flex items-center h-full">
      <p className="text-center w-full m-4">
        You don't have any favorite stations yet
      </p>
    </div>
  );

  return (
    <div className="bg-blue text-white border-1 border-gray-dark m-2 p-2">
      <div className="font-black text-xl text-center m-2">
        Favorite Stations
      </div>
      <div className="overflow-y-auto max-h-32 md:max-h-full md:h-80">
        {favorites}
      </div>
    </div>
  );
}
