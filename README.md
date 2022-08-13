# Where's a Bike?

An app to check bikeshare stations, powered by [Citybikes](https://citybik.es).

## Features

- View all stations for a given network.
  - Choose from any of the 600+ global bikeshare networks.
    - Current network information is saved in browser storage.
  - View currently available bikes and ebikes (if supported), and empty return slots.
  - Get directions to a station via Google Maps.
- Manage favorite stations.
  - Add and remove favorites.
  - Duplicate favorites are prevented.
  - Visual indicator that a station has been favorited.
  - Favorites are saved in browser storage.
- Responsive layout.
  - Components are resized and reordered depending on screen size, to keep key information easily accessible.

## Roadmap/Ideas

**Network**

- Network selection is currently done via a massive, unsorted drop-down menu. I'd like to replace the dropdown with a [Headless UI combobox](https://headlessui.com/react/combobox), and possibly add theoption to filter by country.
- The ability to favorite/pin networks in addition to stations would be nice.
  - A possible alternative would be to store a history of viewed networks and have the combobox pin the most recent ones at the top.

**Stations**

- General filtering/sorting/searching options would be helpful, as larger networks can have several hundred stations.
- The ability to sort by (and display) current distance using each station's latitude/longitude and JavaScript's [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) should befairly straightforward.
  - Getting the distance to another address or location should also be quite doable using one of the various free geocoding APIs available.
- Having the site do periodic API calls and update the station information when it changes would be useful for high-turnover areas.

**Favorites**

- Favorite stations in the main station list should be more visually distinct (background/border color, star icon, etc).
- It should be possible to either filter by favorite stations, or pin them to the top of the station list.
- The favorites list should be updated to include/show what network a station is in.
  - It might be more streamlined if it only displays the network name if a user has favorited stations in multiple networks.
  - Storing the network ID would allow favorites' bike counts to be viewed independently of the current network view, or in a seperate view/modal/etc.

## Tech

React, Redux, TailwindCSS
