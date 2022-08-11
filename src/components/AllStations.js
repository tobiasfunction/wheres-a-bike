import { useState, useEffect } from "react";
import AllStationsItem from "./AllStationsItem";

export default function AllStations(props) {
  const [stations, setStations] = useState();
  const networkId = "bicing";
  const networkName = "Bicing";

  useEffect(() => {
    fetch(
      "http://api.citybik.es/v2/networks/"+networkId
    ).then(async (response) => {
      if (response.ok) {
        const temp = await response.json();
        setStations(temp.network.stations)
      }
    });
  }, []);

  let stationsList = <div>loading...</div>
  if (stations) {
    stationsList = stations.map((e) => <AllStationsItem key={e.id} name={e.name} />);
  }

  return (
    <div className="bg-gray-light m-2 p-2">
      <p className="font-bold text-xl">All Stations for...</p>
      <p className="text-xl">{networkName}</p>
      {stationsList}
    </div>
  );
}
