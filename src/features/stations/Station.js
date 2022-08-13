import React from "react";

export default function Station(props) {
  // TODO: Don't show "Available Ebikes" if a network does not include Ebikes

  const FavoriteLink = () => {
    if (props.isfavorite) return <p>Is a favorite</p>;
    else
      return (
        <p
          className="underline cursor-pointer w-max"
          onClick={props.addfavorite}
        >
          Favorite this
        </p>
      );
  };

  return (
    <div className="bg-white mx-1 my-4 px-4 py-2">
      {/* Left column */}
      <p className="font-bold text-lg mb-2">{props.data.name}</p>
      <div className="sm:flex sm:justify-between">
        <div>
          <p>
            <span className="font-semibold">Available Bikes: </span>
            {props.data.extra.normal_bikes}
          </p>
          <p>
            <span className="font-semibold">Available Ebikes: </span>
            {props.data.extra.ebikes}
          </p>
          <p>
            <span className="font-semibold">Return Slots: </span>
            {props.data.empty_slots}
          </p>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-around">
          <p className="underline w-max">
            <a
              href={`https://maps.google.com/?q=${props.data.latitude},${props.data.longitude}`}
            >
              Get Directions
            </a>
          </p>
          <FavoriteLink />
        </div>
      </div>
    </div>
  );
}
