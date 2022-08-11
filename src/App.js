import AllStations from "./components/AllStations";
import FavoriteStations from "./components/FavoriteStations";
import Networks from "./components/Networks";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue text-white font-extrabold text-center p-1">
        Where's A Bike?
      </header>
      {/* app body */}
      <div className="grow md:flex md:flex-row-reverse md:justify-center p-1">
        {/* right column */}
        <div className="md:w-64">
          <FavoriteStations />
        </div>
        {/* left column */}
        <div className="md:w-96">
          <Networks />
          <AllStations />
        </div>
      </div>
      <footer className="w-full bg-blue text-white self-end p-2">footer</footer>
    </div>
  );
}

export default App;