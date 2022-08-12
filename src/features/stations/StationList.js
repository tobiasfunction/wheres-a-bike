import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../favorites/favoriteSlice";
import Station from "./Station";

export default function StationList(props) {
  const dispatch = useDispatch();
  const [stations, setStations] = useState();
  const networkId = "bicing";
  const networkName = "Bicing";

  // API Call for the list of stations and available bikes
  // TODO: Error/failure handling

  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks/" + networkId)
      .then((response) => response.json())
      .then((data) => setStations(data.network.stations));
  }, []);

  let stationsList;
  if (stations) {
    stationsList = stations.map((e) => (
      <Station key={e.id} data={e} addfavorite={() => dispatch(add(e))} />
    ));
  } else stationsList = <div>loading...</div>;

  return (
    <div className="bg-gray-light m-2 p-2">
      <p className="font-bold text-xl">All Stations for</p>
      <p className="text-xl">{networkName}</p>
      {stationsList}
    </div>
  );
}
