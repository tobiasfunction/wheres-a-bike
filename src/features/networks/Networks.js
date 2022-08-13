import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./networkSlice";

export default function Networks(props) {
  const current = useSelector((state) => state.network);
  const dispatch = useDispatch();
  const [networks, setNetworks] = useState([current]);

  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks?fields=id,name,location")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.networks);
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
        className="ml-8"
        onChange={(e) => {
          // do magic
        }}
      >
        {networkList}
      </select>
    </div>
  );
}
