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
    <div>
      <header className="bg-blue text-white">Where's A Bike</header>
      <div className="container mx-auto">
        <NetworksContainer />
        <AllStations />
        <FavoriteStations />
      </div>
      <footer className="bg-blue text-white">footer</footer>
    </div>
  );
}

export default App;
