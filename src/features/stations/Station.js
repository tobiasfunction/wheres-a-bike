import React from "react";

export default function Station(props) {
  // TODO: Don't show "Available Ebikes" if a network does not include Ebikes

  return (
    <div className="bg-white sm:flex sm:justify-between my-2 p-1">
      <div>
        <p className="font-extrabold">{props.data.name}</p>
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
      <div>
        <p>Get Directions</p>

        {/* onClick fires the Dispatch to add a favorite */}
        <p onClick={props.addfavorite}>Favorite This</p>
      </div>
    </div>
  );
}
