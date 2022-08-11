export default function Networks(props) {
  return (
    <div className="bg-orange m-2 p-1">
      <p className="text-xl font-extrabold"> Networks</p>
      <label htmlFor="chooseNetwork"><p>Choose a Network</p></label>
      <select id="chooseNetwork">
        <option selected value="networkName">
          Network Name
        </option>
      </select>
    </div>
  );
}
