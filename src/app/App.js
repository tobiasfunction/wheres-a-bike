import logo from "./logo.svg";
import StationList from "../features/stations/StationList";
import FavoriteList from "../features/favorites/FavoriteList";
import Networks from "../features/networks/Networks";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue text-white p-1">
        <img src={logo} alt="Where's A Bike?" className="mx-auto" />
      </header>
      {/* app body */}
      <div className="grow md:flex md:flex-row-reverse md:justify-center p-1">
        {/* right column */}
        <div className="md:w-64">
          <FavoriteList />
        </div>
        {/* left column */}
        <div className="md:w-[32rem]">
          <Networks />
          <StationList />
        </div>
      </div>
      <footer className="w-full bg-blue text-white self-end p-2">
        <div className="m-2 ml-8">
          <p className="text-xl font-black mb-1">Where's A Bike?</p>
          <p>112 98th Street</p>
          <p>Pittsburgh, PA 15212</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
