import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../favorites/favoriteSlice";
import Station from "./Station";

export default function StationList(props) {
  const favorites = useSelector((state) => state.favorite.list);
  const network = useSelector((state) => state.network);
  const dispatch = useDispatch();
  const [stations, setStations] = useState();
  const networkId = network.id;
  const networkName = network.name;

  // API Call for the list of stations and available bikes
  // TODO: Error/failure handling

  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks/" + networkId)
      .then((response) => response.json())
      .then((data) => setStations(data.network.stations));
  }, []);

  let stationsList;
  if (stations) {
    stationsList = stations.map((station) => {
      const isFavorite = favorites.some(
        (favorite) => favorite.id === station.id
      );
      return (
        <Station
          key={station.id}
          data={station}
          isfavorite={isFavorite}
          addfavorite={() =>
            dispatch(add({ name: station.name, id: station.id }))
          }
        />
      );
    });
  } else stationsList = <div>loading...</div>;

  return (
    <div className="bg-gray-light m-2 p-4">
      <p className="font-black text-xl">All Stations For</p>
      <p className="text-lg mb-2">{networkName}</p>
      {stationsList}
    </div>
  );
}
