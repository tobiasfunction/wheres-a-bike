export default function Networks(props) {
  return (
    <div className="bg-orange m-2 p-4">
      <p className="text-xl font-black mb-2">Networks</p>
      <label htmlFor="chooseNetwork">
        <p className="font-bold text-sm">Choose a Network</p>
      </label>
      <select id="chooseNetwork" className="ml-8">
        <option value="bicing">Bicing</option>
      </select>
    </div>
  );
}
