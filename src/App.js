function App() {
  function NetworksContainer(props) {
    return <div className="bg-orange m-2 p-1"> Network Chooser</div>;
  }

  function AllStations(props) {
    return <div className="bg-gray-light m-2 p-1">All Stations</div>;
  }

  function FavoriteStations(props) {
    return (
      <div className="bg-blue text-white border-2 border-gray-dark m-2 p-1">
        Favorite Stations
      </div>
    );
  }

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
          <NetworksContainer />
          <AllStations />
        </div>
      </div>
      <footer className="w-full bg-blue text-white self-end p-2">footer</footer>
    </div>
  );
}

export default App;
