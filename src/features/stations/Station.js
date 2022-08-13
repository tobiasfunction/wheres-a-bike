import { data } from "autoprefixer";
import React from "react";

export default function Station(props) {
  // TODO: Don't show "Available Ebikes" if a network does not include Ebikes

  // Some networks handle normal vs ebikes differently in the database, and some don't have ebikes
  // This seems accurate for the networks I tested against their local website
  const Bikes = () => (
    <p>
      <span className="font-semibold">Available Bikes: </span>
      {props.data.extra.normal_bikes ||
        props.data.free_bikes - props.data.extra.ebikes ||
        props.data.free_bikes}
    </p>
  );

  // Only show ebikes if the station is labeled "has ebikes" or has an "ebikes" property
  const Ebikes = () => {
    if (props.data.extra.has_ebikes || props.data.extra.ebikes !== undefined)
      return (
        <p>
          <span className="font-semibold">Available Ebikes: </span>
          {props.data.extra.ebikes}
        </p>
      );
  };

  const Empty = () => (
    <p>
      <span className="font-semibold">Return Slots: </span>
      {props.data.empty_slots}
    </p>
  );

  const DirectionsLink = () => (
    <p className="underline w-max">
      <a
        href={`https://maps.google.com/?q=${props.data.latitude},${props.data.longitude}`}
      >
        Get Directions
      </a>
    </p>
  );

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
          <Bikes />
          <Ebikes />
          <Empty />
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-around">
          <DirectionsLink />
          <FavoriteLink />
        </div>
      </div>
    </div>
  );
}
