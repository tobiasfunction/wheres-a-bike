import AllStationsItem from "./AllStationsItem";

export default function AllStations(props) {
  const stationsList = [];
  for (let i = 0; i < 5; i++) stationsList.push(<AllStationsItem />);
  return (
    <div className="bg-gray-light m-2 p-2">
      <p className="font-bold text-xl">All Stations for...</p>
      <p className="text-xl">Network name</p>
      {stationsList}
    </div>
  );
}
