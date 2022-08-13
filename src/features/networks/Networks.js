import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./networkSlice";

export default function Networks(props) {
  const current = useSelector((state) => state.network.info);
  const dispatch = useDispatch();
  const [networks, setNetworks] = useState([current]);

  // Currently gets all 656 networks without a good way of finding what you are looking for
  // Could use filtering by country, or a search bar with suggestions instead
  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks?fields=id,name,location")
      .then((response) => response.json())
      .then((data) => {
        setNetworks(data.networks);
      });
  }, []);

  let networkList;
  if (networks) {
    networkList = networks.map((e) => (
      <option key={e.id} value={e.id}>
        {e.name}, {e.location.city}
      </option>
    ));
  }

  return (
    <div className="bg-orange m-2 p-4">
      <p className="text-xl font-black mb-2">Networks</p>
      <label htmlFor="chooseNetwork">
        <p className="font-bold text-sm">Choose a Network</p>
      </label>
      <select
        id="chooseNetwork"
        className="bg-gray-50 border border-gray-300 rounded-lg block w-60 p-2 m-2"
        onChange={(event) => {
          const newCurrent = networks.find(
            (element) => element.id === event.target.value
          );
          dispatch(set(newCurrent));
        }}
      >
        {networkList}
      </select>
    </div>
  );
}
