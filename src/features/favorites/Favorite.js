import xIcon from "../../common/xIcon.svg";

export default function Favorite(props) {
  return (
    <div className="flex flex-row">
      <img
        src={xIcon}
        className="cursor-pointer w-3 m-1"
        onClick={props.removefavorite}
      />
      <p className="font-bold text-sm m-1">{props.data.name}</p>
    </div>
  );
}
