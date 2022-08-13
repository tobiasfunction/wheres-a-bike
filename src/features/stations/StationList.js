import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../favorites/favoriteSlice";
import Station from "./Station";

export default function StationList(props) {
  const favorites = useSelector((state) => state.favorite.list);
  const network = useSelector((state) => state.network.info);
  const dispatch = useDispatch();
  const [stations, setStations] = useState();

  // API Call for the list of stations and available bikes
  // TODO: Error/failure handling

  useEffect(() => {
    // Clear out the station list so we get "loading..." when changing networks
    setStations(null);

    // Get station info
    fetch(`http://api.citybik.es/v2/networks/${network.id}?fields=stations`)
      .then((response) => response.json())
      .then((data) => setStations(data.network.stations));
  }, [network.id]); // Refresh when network changes

  let stationsList;
  if (stations) {
    stationsList = stations.map((station) => {
      // Display a station differently if it's a favorite
      // Right now, this just shows different text, but could have a different background color, star icon, etc, or be sorted at the top of the list.
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
      <p className="text-lg mb-2">
        {/* including the city because some companies operate in different cities under the same name */}
        {network.name}, {network.location.city}
      </p>
      {stationsList}
    </div>
  );
}
