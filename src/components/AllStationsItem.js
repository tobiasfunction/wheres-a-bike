export default function AllStationsItem(props) {

  return (
    <div className="bg-white sm:flex sm:justify-between my-2 p-1">
      <div><p className="font-bold">{props.name}</p>
      <p>Station Info</p></div>
      <p>Station Links</p>
    </div>
  );
}
