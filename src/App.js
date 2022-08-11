function App() {
  function NetworksContainer(props) {
    return <div className="bg-orange"> Network Chooser</div>;
  }

  function AllStations(props) {
    return <div className="bg-gray-light">All Stations</div>;
  }

  function FavoriteStations(props) {
    return (
      <div className="bg-blue text-white border-2 border-gray-dark">
        Favorite Stations
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue text-white font-extrabold text-center">Where's A Bike?</header>
      {/* App body */}
      <div className="container mx-auto flex-grow md:flex md:flex-row-reverse md:justify-center">
        {/* right column */}
        <div>
          <FavoriteStations />
        </div>
        {/* left column */}
        <div>
          <NetworksContainer />
          <AllStations />
        </div>
      </div>
      <footer className="w-full bg-blue text-white self-end">footer</footer>
    </div>
  );
}

export default App;
